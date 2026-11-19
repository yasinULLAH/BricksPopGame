#!/usr/bin/env node
/*
 * Tiny helper: sets the "version" field of a package.json file.
 * Usage: node set-version.mjs package.json 4.0.123
 */
import fs from 'node:fs';
import process from 'node:process';

const [file, version] = process.argv.slice(2);

if (!file || !version) {
  console.error('usage: node set-version.mjs <package.json> <version>');
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(file, 'utf8'));
pkg.version = version;
fs.writeFileSync(file, `${JSON.stringify(pkg, null, 2)}\n`, 'utf8');
console.log(`${file}: version -> ${version}`);
