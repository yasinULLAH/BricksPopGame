#!/usr/bin/env node
/*
 * BRICKPOP NOVA ULTIMATE — icon generator
 * Copyright (c) 2026 Yasin Ullah — Bannu Software Solutions
 *
 * Turns logo-master.png (1024x1024) into every icon the native builds need:
 *   • Android legacy launcher icons (mdpi ... xxxhdpi)
 *   • Android round launcher icons
 *   • Android adaptive icon layers (foreground + background + anydpi XML)
 *   • a high resolution PNG for the Windows Electron executable
 *
 * Usage:
 *   node .github/build/scripts/generate-icons.mjs \
 *        --logo logo-master.png \
 *        --android-res <android/app/src/main/res> \
 *        --png <output-icon.png>
 *
 * Both --android-res and --png are optional, pass the one you need.
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { createRequire } from 'node:module';

/*
 * Resolve sharp from the project that is being packaged (the working
 * directory), not from this script's location. The scripts live in
 * .github/build/scripts while node_modules is installed next to the game.
 */
const requireFromProject = createRequire(path.join(process.cwd(), 'package.json'));
let sharp;
try {
  sharp = requireFromProject('sharp');
} catch {
  console.error('ERROR: the "sharp" package is not installed in ' + process.cwd());
  console.error('       run "npm install" in that directory first.');
  process.exit(1);
}

const BG = { r: 11, g: 7, b: 22, alpha: 1 }; // #0B0716 (game background)
const LAUNCHER_DP = 48; // legacy square / round launcher icon
const ADAPTIVE_DP = 108; // adaptive icon canvas
// The logo is full-bleed artwork, so it can fill the whole adaptive canvas; the
// launcher mask trims the (starfield) corners and there is never a visible
// square edge inside the round/squircle icon.
const FOREGROUND_SCALE = 1; // fraction of the adaptive canvas used by the artwork
const DENSITIES = { mdpi: 1, hdpi: 1.5, xhdpi: 2, xxhdpi: 3, xxxhdpi: 4 };

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith('--')) continue;
    const key = arg.slice(2);
    const value = argv[i + 1];
    if (!value || value.startsWith('--')) {
      out[key] = true;
    } else {
      out[key] = value;
      i += 1;
    }
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));
const logoPath = path.resolve(process.cwd(), args.logo || 'logo-master.png');

if (!fs.existsSync(logoPath)) {
  console.error(`ERROR: logo not found: ${logoPath}`);
  process.exit(1);
}

const meta = await sharp(logoPath).metadata();
console.log(`[icons] source: ${logoPath} (${meta.width}x${meta.height})`);

const logoBuffer = await sharp(logoPath)
  .resize(1024, 1024, { fit: 'cover', position: 'centre' })
  .png()
  .toBuffer();

/** Scale a px value for a density bucket, always at least 1px. */
const px = (dp, density) => Math.max(1, Math.round(dp * density));

/* ---------------------------------------------------------------------------
 * Android
 * ------------------------------------------------------------------------- */
if (args['android-res']) {
  const resDir = path.resolve(process.cwd(), args['android-res']);
  if (!fs.existsSync(resDir)) {
    console.error(`ERROR: Android res directory not found: ${resDir}`);
    process.exit(1);
  }

  for (const [bucket, density] of Object.entries(DENSITIES)) {
    const mipmapDir = path.join(resDir, `mipmap-${bucket}`);
    fs.mkdirSync(mipmapDir, { recursive: true });

    // Legacy square icon (used before Android 8, and by some launchers).
    const square = px(LAUNCHER_DP, density);
    await sharp(logoBuffer)
      .resize(square, square, { fit: 'cover', position: 'centre' })
      .png({ compressionLevel: 9 })
      .toFile(path.join(mipmapDir, 'ic_launcher.png'));

    // Legacy round icon: same artwork clipped to a circle.
    const circleMask = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${square}" height="${square}">` +
        `<circle cx="${square / 2}" cy="${square / 2}" r="${square / 2}"/></svg>`,
    );
    await sharp(logoBuffer)
      .resize(square, square, { fit: 'cover', position: 'centre' })
      .composite([{ input: circleMask, blend: 'dest-in' }])
      .png({ compressionLevel: 9 })
      .toFile(path.join(mipmapDir, 'ic_launcher_round.png'));

    // Adaptive icon foreground (transparent canvas, centred artwork).
    const adaptive = px(ADAPTIVE_DP, density);
    const artwork = Math.round(adaptive * FOREGROUND_SCALE);
    const artworkBuffer = await sharp(logoBuffer)
      .resize(artwork, artwork, { fit: 'cover', position: 'centre' })
      .png()
      .toBuffer();
    await sharp({
      create: { width: adaptive, height: adaptive, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
    })
      .composite([{ input: artworkBuffer, gravity: 'centre' }])
      .png({ compressionLevel: 9 })
      .toFile(path.join(mipmapDir, 'ic_launcher_foreground.png'));

    // Adaptive icon background (solid game colour, full bleed).
    await sharp({ create: { width: adaptive, height: adaptive, channels: 4, background: BG } })
      .png({ compressionLevel: 9 })
      .toFile(path.join(mipmapDir, 'ic_launcher_background.png'));
  }

  // Adaptive icon definitions (Android 8+).
  const anydpiDir = path.join(resDir, 'mipmap-anydpi-v26');
  fs.mkdirSync(anydpiDir, { recursive: true });
  const adaptiveXml = [
    '<?xml version="1.0" encoding="utf-8"?>',
    '<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">',
    '    <background android:drawable="@color/ic_launcher_background" />',
    '    <foreground android:drawable="@mipmap/ic_launcher_foreground" />',
    '</adaptive-icon>',
    '',
  ].join('\n');
  fs.writeFileSync(path.join(anydpiDir, 'ic_launcher.xml'), adaptiveXml, 'utf8');
  fs.writeFileSync(path.join(anydpiDir, 'ic_launcher_round.xml'), adaptiveXml, 'utf8');

  // Adaptive background colour resource.
  const valuesDir = path.join(resDir, 'values');
  fs.mkdirSync(valuesDir, { recursive: true });
  fs.writeFileSync(
    path.join(valuesDir, 'ic_launcher_background.xml'),
    [
      '<?xml version="1.0" encoding="utf-8"?>',
      '<resources>',
      '    <color name="ic_launcher_background">#0B0716</color>',
      '</resources>',
      '',
    ].join('\n'),
    'utf8',
  );

  // Remove the default Capacitor placeholder vector layers, they are no longer used.
  for (const stale of [
    path.join(resDir, 'drawable-v24', 'ic_launcher_foreground.xml'),
    path.join(resDir, 'drawable', 'ic_launcher_background.xml'),
  ]) {
    if (fs.existsSync(stale)) {
      fs.rmSync(stale);
      console.log(`[icons] removed placeholder ${path.relative(resDir, stale)}`);
    }
  }

  console.log(`[icons] Android launcher icons written to ${resDir}`);
}

/* ---------------------------------------------------------------------------
 * Windows / Electron
 * ------------------------------------------------------------------------- */
if (args.png) {
  const outFile = path.resolve(process.cwd(), args.png);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  await sharp(logoBuffer).resize(1024, 1024).png({ compressionLevel: 9 }).toFile(outFile);
  console.log(`[icons] Electron icon written to ${outFile}`);
}

if (!args['android-res'] && !args.png) {
  console.error('Nothing to do: pass --android-res and/or --png');
  process.exit(1);
}
