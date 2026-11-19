#!/usr/bin/env node
/*
 * BRICKPOP NOVA ULTIMATE — offline web bundle assembler
 * Copyright (c) 2026 Yasin Ullah — Bannu Software Solutions
 *
 * Copies the single-file game into a native-app web root and removes the only
 * network dependency it has (the Workbox/PWA bootstrap, which is loaded from a
 * Google CDN). The packaged APK / EXE therefore never touches the network.
 *
 * Usage: node .github/build/scripts/prepare-web.mjs <destination-dir>
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const destArg = process.argv[2];
if (!destArg) {
  console.error('usage: node prepare-web.mjs <destination-dir>');
  process.exit(1);
}

const root = process.cwd();
const dest = path.resolve(root, destArg);
const sourceHtml = path.join(root, 'index.html');

if (!fs.existsSync(sourceHtml)) {
  console.error(`ERROR: index.html not found at ${sourceHtml}`);
  process.exit(1);
}

fs.mkdirSync(dest, { recursive: true });

let html = fs.readFileSync(sourceHtml, 'utf8');
const originalLength = html.length;

/* ---------------------------------------------------------------------------
 * 1. Drop the PWA service-worker bootstrap.
 *    pwa-register.js does `import ... from 'https://storage.googleapis.com/...'`
 *    which cannot work inside a packaged offline app and would just log an
 *    error. The native shells do not need (and cannot use) a service worker.
 * ------------------------------------------------------------------------- */
const pwaScriptRe = /\s*<script\b[^>]*\bsrc\s*=\s*["'][^"']*pwa-register\.js[^"']*["'][^>]*>\s*<\/script>/gi;
if (pwaScriptRe.test(html)) {
  html = html.replace(pwaScriptRe, '');
  console.log('[prepare-web] removed PWA service-worker bootstrap (pwa-register.js)');
} else {
  console.log('[prepare-web] note: pwa-register.js script tag not found (already clean)');
}

/* ---------------------------------------------------------------------------
 * 2. Remove any other external <script src="http(s)://..."> tags. The game is
 *    currently 100% self-contained, this is simply a safety net.
 * ------------------------------------------------------------------------- */
html = html.replace(/\s*<script\b[^>]*\bsrc\s*=\s*["']https?:\/\/[^"']*["'][^>]*>\s*<\/script>/gi, () => {
  console.warn('[prepare-web] removed an external <script src="http(s)://..."> tag');
  return '';
});

/* ---------------------------------------------------------------------------
 * 3. Native-shell polish (all offline, no assets involved):
 *    - dark color-scheme so native scrollbars/form controls stay dark
 *    - no rubber-band / pull-to-refresh when the game is swiped
 *    - no blue tap flash on touch devices
 * ------------------------------------------------------------------------- */
const injectedHead = [
  '<meta content="dark" name="color-scheme"/>',
  '<meta content="yes" name="mobile-web-app-capable"/>',
  '<style id="brickpop-native-shell">',
  'html,body{overscroll-behavior:none;-webkit-tap-highlight-color:transparent}',
  '</style>',
].join('\n');

if (!html.includes('brickpop-native-shell')) {
  if (!/<\/head>/i.test(html)) {
    console.error('ERROR: index.html has no </head> tag');
    process.exit(1);
  }
  html = html.replace(/<\/head>/i, `${injectedHead}\n</head>`);
}

/* ---------------------------------------------------------------------------
 * 4. Report anything that would still require the internet.
 * ------------------------------------------------------------------------- */
const externalRefs = [...html.matchAll(/\b(?:src|href)\s*=\s*["']https?:\/\/[^"']+["']/gi)].map((m) => m[0]);
if (externalRefs.length > 0) {
  console.warn('[prepare-web] WARNING: external references found in index.html:');
  for (const ref of externalRefs) console.warn(`  ${ref}`);
} else {
  console.log('[prepare-web] verified: no external src/href references remain');
}

fs.writeFileSync(path.join(dest, 'index.html'), html, 'utf8');

/* ---------------------------------------------------------------------------
 * 5. Copy the small local assets referenced by the HTML/manifest so nothing
 *    404s inside the WebView.
 * ------------------------------------------------------------------------- */
const copyIfExists = (name) => {
  const from = path.join(root, name);
  if (!fs.existsSync(from)) return false;
  fs.copyFileSync(from, path.join(dest, name));
  return true;
};

const assets = ['manifest.json', 'favicon.ico'];
for (const file of fs.readdirSync(root)) {
  if (/^icon-\d+\.png$/i.test(file)) assets.push(file);
}

const copied = assets.filter(copyIfExists);
console.log(`[prepare-web] copied ${copied.length} local asset(s): ${copied.join(', ') || '(none)'}`);
console.log(
  `[prepare-web] index.html ${(originalLength / 1024).toFixed(1)} KB -> ${(html.length / 1024).toFixed(1)} KB`,
);
console.log(`[prepare-web] offline web root ready at ${dest}`);
