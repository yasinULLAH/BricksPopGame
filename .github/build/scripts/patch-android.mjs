#!/usr/bin/env node
/*
 * BRICKPOP NOVA ULTIMATE — Android project customizer
 * Copyright (c) 2026 Yasin Ullah — Bannu Software Solutions
 *
 * Applied after `npx cap add android` and before Gradle builds the APK. It turns
 * the stock Capacitor project into a 100% offline, immersive-fullscreen game:
 *
 *   1. Immersive sticky fullscreen + keep-screen-on MainActivity
 *   2. Portrait orientation, hardware acceleration
 *   3. INTERNET permission removed (the packaged game cannot reach the network)
 *   4. Dark native splash screen using the app icon (no splash images needed)
 *   5. versionCode / versionName injected from the workflow run
 *
 * Usage: node .github/build/scripts/patch-android.mjs [android-dir]
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const androidDir = path.resolve(process.cwd(), process.argv[2] || 'android');
const versionCode = process.env.APP_VERSION_CODE || process.env.GITHUB_RUN_NUMBER || '1';
const versionName = process.env.APP_VERSION_NAME || process.env.APP_VERSION || '4.0.0';
const appId = process.env.APP_ID || 'com.yasinullah.brickpopnova';
const packagePath = appId.split('.').join('/');

if (!fs.existsSync(androidDir)) {
  console.error(`ERROR: Android project not found: ${androidDir}`);
  process.exit(1);
}

let failed = false;
const fail = (message) => {
  failed = true;
  console.error(`ERROR: ${message}`);
};
const ok = (message) => console.log(`[android] ${message}`);
const read = (file) => fs.readFileSync(file, 'utf8');
const write = (file, content) => fs.writeFileSync(file, content, 'utf8');

/* ---------------------------------------------------------------------------
 * 1. AndroidManifest.xml — orientation + no network permission
 * ------------------------------------------------------------------------- */
const manifestPath = path.join(androidDir, 'app', 'src', 'main', 'AndroidManifest.xml');
if (!fs.existsSync(manifestPath)) {
  fail(`AndroidManifest.xml not found at ${manifestPath}`);
} else {
  let manifest = read(manifestPath);

  if (!manifest.includes('xmlns:tools=')) {
    manifest = manifest.replace('<manifest ', '<manifest xmlns:tools="http://schemas.android.com/tools" ');
  }

  // Portrait-only game (the web manifest also declares portrait-primary).
  if (!manifest.includes('android:screenOrientation=')) {
    if (manifest.includes('android:name=".MainActivity"')) {
      manifest = manifest.replace(
        /android:name="\.MainActivity"/,
        'android:name=".MainActivity"\n            android:screenOrientation="portrait"',
      );
      ok('activity locked to portrait');
    } else {
      fail('MainActivity declaration not found in AndroidManifest.xml');
    }
  }

  // Hardware acceleration is on by default, make it explicit for the canvas.
  if (manifest.includes('<application') && !manifest.includes('android:hardwareAccelerated=')) {
    manifest = manifest.replace('<application', '<application\n        android:hardwareAccelerated="true"');
  }

  // 100% offline: the Capacitor WebView serves the game from inside the APK, so
  // the INTERNET permission is not needed. Removing it guarantees the app can
  // never phone home and lets it run on a device with no connectivity at all.
  manifest = manifest.replace(
    /\s*(?:<!--[\s\S]*?-->\s*)?<uses-permission[^>]*android:name="android\.permission\.INTERNET"[^>]*\/>/g,
    '\n',
  );
  if (!manifest.includes('tools:node="remove"')) {
    manifest = manifest.replace(
      /<\/manifest>\s*$/,
      '\n    <!-- Capacitor declares INTERNET in its library manifest; strip it for a 100% offline app -->\n' +
        '    <uses-permission android:name="android.permission.INTERNET" tools:node="remove" />\n</manifest>\n',
    );
  }
  if (!manifest.includes('tools:node="remove"')) {
    fail('could not inject the INTERNET permission removal node');
  }

  write(manifestPath, manifest);
  ok('INTERNET permission removed (offline-only app)');
}

/* ---------------------------------------------------------------------------
 * 2. MainActivity.java — immersive sticky fullscreen, keep screen on
 * ------------------------------------------------------------------------- */
function findMainActivity(dir) {
  if (!fs.existsSync(dir)) return null;
  const stack = [dir];
  while (stack.length > 0) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
      } else if (entry.name === 'MainActivity.java' || entry.name === 'MainActivity.kt') {
        return full;
      }
    }
  }
  return null;
}

const mainActivityPath = findMainActivity(path.join(androidDir, 'app', 'src', 'main', 'java'));
if (!mainActivityPath) {
  fail('MainActivity.java not found');
} else if (mainActivityPath.endsWith('.kt')) {
  // Capacitor's template ships Java; keep a clear error instead of silently
  // producing an app without immersive fullscreen.
  fail('template unexpectedly generated MainActivity.kt — update patch-android.mjs');
} else {
  const existing = read(mainActivityPath);
  const packageMatch = existing.match(/package\s+([\w.]+)\s*;/);
  const pkg = packageMatch ? packageMatch[1] : appId;

  const java = `package ${pkg};

import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;

import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;

import com.getcapacitor.BridgeActivity;

/**
 * BRICKPOP NOVA ULTIMATE - immersive fullscreen shell.
 * Generated by .github/build/scripts/patch-android.mjs
 */
public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // Keep the display awake while a level is being played.
        getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        // Draw edge to edge; the game already honours env(safe-area-inset-*).
        WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
        applyImmersiveMode();
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) {
            applyImmersiveMode();
        }
    }

    private void applyImmersiveMode() {
        WindowInsetsControllerCompat controller =
            WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
        if (controller != null) {
            controller.hide(WindowInsetsCompat.Type.systemBars());
            controller.setSystemBarsBehavior(
                WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
        }

        // Legacy immersive flags: still the most reliable "sticky" fullscreen on
        // older WebViews, and they keep the layout out of display cutouts.
        View decorView = getWindow().getDecorView();
        decorView.setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
                | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
                | View.SYSTEM_UI_FLAG_FULLSCREEN
        );
    }
}
`;
  write(mainActivityPath, java);
  ok(`immersive fullscreen MainActivity written (${path.relative(androidDir, mainActivityPath)})`);
}

/* ---------------------------------------------------------------------------
 * 3. strings.xml — make sure the launcher label is the game name
 * ------------------------------------------------------------------------- */
const stringsPath = path.join(androidDir, 'app', 'src', 'main', 'res', 'values', 'strings.xml');
if (fs.existsSync(stringsPath)) {
  let strings = read(stringsPath);
  strings = strings.replace(
    /<string name="app_name">[^<]*<\/string>/,
    '<string name="app_name">BrickPop Nova Ultimate</string>',
  );
  strings = strings.replace(
    /<string name="title_activity_main">[^<]*<\/string>/,
    '<string name="title_activity_main">BrickPop Nova Ultimate</string>',
  );
  write(stringsPath, strings);
}

/* ---------------------------------------------------------------------------
 * 4. styles.xml — dark native splash (icon on game background, no image bloat)
 * ------------------------------------------------------------------------- */
const stylesPath = path.join(androidDir, 'app', 'src', 'main', 'res', 'values', 'styles.xml');
if (!fs.existsSync(stylesPath)) {
  fail(`styles.xml not found at ${stylesPath}`);
} else {
  let styles = read(stylesPath);

  styles = styles.replace(
    /<style name="AppTheme\.NoActionBarLaunch"[\s\S]*?<\/style>/,
    `<style name="AppTheme.NoActionBarLaunch" parent="Theme.SplashScreen">
        <item name="windowSplashScreenBackground">#0B0716</item>
        <item name="windowSplashScreenAnimatedIcon">@mipmap/ic_launcher</item>
        <item name="postSplashScreenTheme">@style/AppTheme.NoActionBar</item>
        <item name="android:background">#0B0716</item>
    </style>`,
  );

  styles = styles.replace(
    /<style name="AppTheme\.NoActionBar"[\s\S]*?<\/style>/,
    `<style name="AppTheme.NoActionBar" parent="Theme.AppCompat.DayNight.NoActionBar">
        <item name="windowActionBar">false</item>
        <item name="windowNoTitle">true</item>
        <item name="android:background">@null</item>
        <item name="android:windowBackground">#0B0716</item>
        <item name="android:statusBarColor">#0B0716</item>
        <item name="android:navigationBarColor">#0B0716</item>
    </style>`,
  );

  if (!styles.includes('windowSplashScreenBackground')) {
    fail('could not patch the launch theme in styles.xml');
  }
  write(stylesPath, styles);
  ok('dark native splash screen + dark system bars configured');
}

/* ---------------------------------------------------------------------------
 * 5. app/build.gradle — version code/name from the workflow run
 * ------------------------------------------------------------------------- */
const gradlePath = path.join(androidDir, 'app', 'build.gradle');
if (!fs.existsSync(gradlePath)) {
  fail(`app/build.gradle not found at ${gradlePath}`);
} else {
  let gradle = read(gradlePath);
  if (!/versionCode\s+\d+/.test(gradle)) fail('versionCode line not found in app/build.gradle');
  if (!/versionName\s+["'][^"']*["']/.test(gradle)) fail('versionName line not found in app/build.gradle');

  gradle = gradle
    .replace(/versionCode\s+\d+/, `versionCode ${versionCode}`)
    .replace(/versionName\s+["'][^"']*["']/, `versionName "${versionName}"`);

  write(gradlePath, gradle);
  ok(`version set to ${versionName} (versionCode ${versionCode})`);
}

/* ---------------------------------------------------------------------------
 * 6. local.properties — point Gradle at the runner's Android SDK
 * ------------------------------------------------------------------------- */
const sdkDir = process.env.ANDROID_HOME || process.env.ANDROID_SDK_ROOT;
if (sdkDir) {
  write(path.join(androidDir, 'local.properties'), `sdk.dir=${sdkDir.replace(/\\/g, '\\\\')}\n`);
  ok(`local.properties -> ${sdkDir}`);
}

if (failed) {
  console.error('[android] one or more patches failed — refusing to build a broken APK');
  process.exit(1);
}

console.log('[android] project is ready for an offline, fullscreen release build');
