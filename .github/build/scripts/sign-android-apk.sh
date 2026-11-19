#!/usr/bin/env bash
# =============================================================================
# BRICKPOP NOVA ULTIMATE — APK alignment + signing
# Copyright (c) 2026 Yasin Ullah — Bannu Software Solutions
#
# Signs the release APK with the project keystore so that every CI build has
# the SAME signature. That is what allows a newer APK to install straight over
# an older one ("update") instead of forcing an uninstall first.
#
# Optional GitHub secrets (override the committed personal-use keystore):
#   ANDROID_KEYSTORE_BASE64   base64 of a .jks/.keystore file
#   ANDROID_KEYSTORE_PASSWORD
#   ANDROID_KEY_ALIAS         (default: brickpop)
#   ANDROID_KEY_PASSWORD      (default: same as store password)
#
# Usage: sign-android-apk.sh <unsigned.apk> <output.apk>
# =============================================================================
set -euo pipefail

APK_IN="${1:?usage: sign-android-apk.sh <unsigned.apk> <output.apk>}"
APK_OUT="${2:?usage: sign-android-apk.sh <unsigned.apk> <output.apk>}"

[[ -f "$APK_IN" ]] || { echo "ERROR: unsigned APK not found: $APK_IN" >&2; exit 1; }

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
DEFAULT_KEYSTORE="$REPO_ROOT/.github/build/keystore/brickpop-release.jks"

if [[ -n "${ANDROID_KEYSTORE_BASE64:-}" ]]; then
  echo "Using signing keystore from ANDROID_KEYSTORE_BASE64 secret"
  KEYSTORE_PATH="${RUNNER_TEMP:-/tmp}/brickpop-signing.jks"
  printf '%s' "$ANDROID_KEYSTORE_BASE64" | base64 --decode > "$KEYSTORE_PATH"
  STORE_PASS="${ANDROID_KEYSTORE_PASSWORD:?ANDROID_KEYSTORE_PASSWORD is required when ANDROID_KEYSTORE_BASE64 is set}"
  KEY_ALIAS="${ANDROID_KEY_ALIAS:-brickpop}"
  KEY_PASS="${ANDROID_KEY_PASSWORD:-$STORE_PASS}"
else
  echo "Using the project's built-in personal-use signing keystore"
  KEYSTORE_PATH="$DEFAULT_KEYSTORE"
  STORE_PASS="BrickPopNova2026"
  KEY_ALIAS="brickpop"
  KEY_PASS="BrickPopNova2026"
fi

[[ -f "$KEYSTORE_PATH" ]] || { echo "ERROR: keystore not found: $KEYSTORE_PATH" >&2; exit 1; }

SDK_DIR="${ANDROID_HOME:-${ANDROID_SDK_ROOT:-}}"
if [[ -z "$SDK_DIR" ]]; then
  for candidate in /usr/local/lib/android/sdk "$HOME/Android/Sdk" "$HOME/android-sdk"; do
    if [[ -d "$candidate" ]]; then SDK_DIR="$candidate"; break; fi
  done
fi
[[ -n "$SDK_DIR" ]] || { echo "ERROR: Android SDK not found (ANDROID_HOME is empty)" >&2; exit 1; }

BUILD_TOOLS_DIR="$(ls -d "$SDK_DIR"/build-tools/*/ 2>/dev/null | sort -V | tail -n 1)"
[[ -n "$BUILD_TOOLS_DIR" ]] || { echo "ERROR: no build-tools installed in $SDK_DIR" >&2; exit 1; }

ZIPALIGN="${BUILD_TOOLS_DIR}zipalign"
APKSIGNER="${BUILD_TOOLS_DIR}apksigner"
[[ -x "$ZIPALIGN" ]] || { echo "ERROR: zipalign not found in $BUILD_TOOLS_DIR" >&2; exit 1; }
[[ -x "$APKSIGNER" ]] || { echo "ERROR: apksigner not found in $BUILD_TOOLS_DIR" >&2; exit 1; }

echo "Build tools: $BUILD_TOOLS_DIR"

ALIGNED_APK="${APK_OUT%.apk}-aligned.apk"
"$ZIPALIGN" -p -f 4 "$APK_IN" "$ALIGNED_APK"

"$APKSIGNER" sign \
  --ks "$KEYSTORE_PATH" \
  --ks-key-alias "$KEY_ALIAS" \
  --ks-pass "pass:$STORE_PASS" \
  --key-pass "pass:$KEY_PASS" \
  --out "$APK_OUT" \
  "$ALIGNED_APK"

rm -f "$ALIGNED_APK"

echo "Verifying signature..."
"$APKSIGNER" verify --verbose --print-certs "$APK_OUT"

echo "Signed APK: $APK_OUT ($(du -h "$APK_OUT" | cut -f1))"
