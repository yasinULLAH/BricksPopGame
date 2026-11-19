# 🧱 BRICKPOP NOVA ULTIMATE — Complete Bilingual Documentation (English & اردو)

> **💛 Dedication / انتساب:** Dedicated with love to my little **Muhib Ullah** — *یہ ایپ مصنف کی طرف سے اپنے پیارے بیٹے **محب اللہ** کے نام منسوب ہے۔*
>
> **© Copyright Notice:** Copyright © 2026 **Yasin Ullah — Bannu Software Solutions**. All Rights Reserved.
> Copying, modification, redistribution, reverse engineering, or reuse of this application, source code, design, or assets is **STRICTLY PROHIBITED** without prior permission and mandatory attribution to the original author (**Yasin Ullah**).

---

## 📌 Repository & Version Structure

| File | Role | Description |
| :--- | :--- | :--- |
| `index.html` | **Main Application (Unified V3 Ultimate)** | The flagship single-file offline neon arcade game combining **every feature from V1, V2, and V3**, plus **Unlimited Levels & Sectors**, **Unlimited Ranks & Prestige**, **4 Game Modes**, **Full Pro Statistics & Charts**, **Daily Missions**, **Copyright**, and **Dedication**. |
| `indexV1.html` | Legacy Version 1 (`Brick Blitz`) | Original V1 archived for version reference. |
| `indexV2.html` | Legacy Version 2 (`BrickPop Nova`) | Original V2 archived for version reference. |
| `README.md` | Full Bilingual Documentation | Complete technical and user guide in **English & Urdu**. |
| `CLIENT-README.md` | Client-Only Simple Urdu Guide | 100% plain Urdu non-technical handbook with step-by-step instructions and exhaustive FAQ. |
| `FEATURES-REPORT.md` | Executive Feature Report | Structured tabular breakdown of every module, capability, and highlight. |
| `.github/workflows/build-apk-exe.yml` | Cloud Build Pipeline | GitHub Actions workflow that automatically compiles a **100% offline fullscreen Android APK** and **standalone portable Windows EXE** on every commit, using `logo-master.png` for both app icons. |

---

# 🇬🇧 PART 1: COMPLETE ENGLISH DOCUMENTATION

## 1. Overview & Purpose

**BrickPop Nova Ultimate** is a 100% offline, single-file neon arcade brick-breaker built on the V3 high-DPI HTML5 Canvas and procedural Web Audio synthesizer engine, unified with every module from V1 and V2 and upgraded with infinite progression:

- **Zero Internet Required:** Zero external CDN dependencies, zero external fonts, zero audio file downloads. All graphics, sprites, particle effects, and arcade sound effects are procedurally generated locally.
- **Cross-Platform Fullscreen Ready:** Plays smoothly in mobile browsers, desktop browsers, standalone Android APK, and portable Windows EXE.
- **Automatic Local Persistence:** Every coin, XP point, rank, level star, skin, booster, daily mission, and statistic is saved automatically to local browser/app storage.

## 2. Game Modes (All 4 Modes)

| Mode | Description | Escalation & Rewards |
| :--- | :--- | :--- |
| **🚀 Unlimited Campaign** | Infinite levels grouped into 8 themed Worlds (15 levels per world) across **Unlimited Sectors (Sector 1 → ∞)**. Every 15th level is a **Boss Formation**. | Speed, armored HP, steel density, moving bricks, and Crystal Boss Core HP scale up every level and every Sector. Awards 1–3 Stars, Coins, Flawless 3★ bonus, Boss bounty, and Rank XP. |
| **♾️ Endless Waves** | Survive infinite waves while the brick wall descends on a tightening timer. | Every cleared wave increases ball speed and shortens descent intervals. Every 5th wave is a Boss Wave; every 3rd wave restores +1 Heart. Tracks Endless Best Score and Highest Wave. |
| **⏱️ Time Attack** | Fast-paced 150-second speedrun mode. Clear stages rapidly to earn **+20 bonus seconds** per cleared board. | Tracks Time Attack Record and awards Coins + Rank XP per cleared speed stage. |
| **🌠 Daily Challenge** | A unique, date-seeded cosmic Boss board generated fresh from the local calendar date every day. | 180-second countdown, high rewards (+160 base coins + XP), and Daily Hero achievement progress. |

## 3. Unlimited Levels & World Themes

Campaign levels never end. Each Sector contains **8 Worlds × 15 Levels = 120 Levels**, after which **Sector 2, Sector 3, Sector 4... (∞)** unlock automatically with higher difficulty multipliers (`×1.35`, `×1.70`, etc.):

1. **World 1 — Neon District** (Boss: *THE INVADER*)
2. **World 2 — Sunset Strip** (Boss: *SOLAR HEART*)
3. **World 3 — Acid Garden** (Boss: *ACID SMILE*)
4. **World 4 — Cryo Caverns** — Moving bricks introduced (Boss: *FROST CROWN*)
5. **World 5 — Magma Core** — Trap capsules introduced (Boss: *MAGMA SKULL*)
6. **World 6 — Violet Void** (Boss: *VOID STAR*)
7. **World 7 — Gilded Sky** (Boss: *GILDED GEM*)
8. **World 8 — Prism Storm** (Boss: *THE PHOENIX*)

In the **Levels** tab, players can switch Sectors (`◀` / `▶`), select any of the 8 Worlds, and filter levels by **All**, **Open**, **3★**, or **Boss**, with live mini-canvas previews for every single stage.

## 4. Unlimited Rank, XP & Category Mastery System

Players earn **Rank XP** from breaking bricks, clearing levels, defeating bosses, completing Daily Missions, claiming Achievements, and playing Endless/Time Attack.

### Overall Rank Ladder (Exponentially Harder Over Time)
Each rank requires `250 × (Rank^1.35)` XP to advance:
1. **Novice** (I, II, III) 🌱
2. **Bronze Breaker** (I, II, III) 🥉
3. **Silver Striker** (I, II, III) 🥈
4. **Gold Smasher** (I, II, III) 🥇
5. **Platinum Crusher** (I, II, III) 💠
6. **Diamond Blaster** (I, II, III) 💎
7. **Master Architect** (I, II, III) ⚡
8. **Grandmaster Nova** (I, II, III) 🔥
9. **Mythic Legend** (I, II, III) 👑
10. **Infinite Overlord Prestige** (`P1`, `P2`, `P3`, ... `∞`) 🌌

Every Rank-Up triggers a live celebratory banner, sound fanfare, and bonus coin reward (`50 + Rank × 10` coins).

### 5 Category Mastery Ranks
- **Campaign Mastery:** Initiate → Scout → Vanguard → Commander → Warlord → Galactic → Ascendant → Apex Tier+
- **Endless Mastery:** Survivor → Runner → Gladiator → Titan → Immortal → Eternal → Apex Tier+
- **Time Attack Mastery:** Sprinter → Blitzer → Velocity → Lightspeed → Chrono → Apex Tier+
- **Combo Mastery:** Spark → Chain → Flow → Surge → Overload → Legendary → Apex Tier+
- **Boss Slayer:** Challenger → Hunter → Slayer → Destroyer → Nemesis → Executioner → Apex Tier+

## 5. Complete Brick Types (8 Types)

| Brick | Behavior & Effect |
| :--- | :--- |
| **Normal Colored Brick** | 1 HP. Standard points, coins, and XP. |
| **Armored Brick (2 HP)** | 2 HP with status pips and fracture cracks on hit. |
| **Heavy Armored Brick (3+ HP)** | 3+ HP (scales higher in Sector 2+), high score & coins. |
| **Explosive Bomb Brick** | Detonates a 3×3 chain-reaction blast wave damaging all surrounding bricks. |
| **Indestructible Steel Brick** | Deflects normal balls with metallic sparks; can ONLY be destroyed by **Fireball**. |
| **Gold Coin Brick** | Drops high coin bursts (+12 coins) and bonus score. |
| **Gift Capsule Brick** | Guaranteed drop of a beneficial power-up capsule. |
| **Crystal Boss Core Brick** | High-HP glowing star brick with live HP bar inside Boss formations; huge XP & score. |

## 6. All 11 Power-Up Capsules & Traps

| Capsule | Effect | Duration / Charges |
| :--- | :--- | :--- |
| **Wide Paddle** | Expands paddle width by +45% | 14 seconds |
| **Multiball** | Splits active balls into extra balls (up to 7) | Instant |
| **Slow-Mo** | Reduces ball speed by 28% for precision control | 10 seconds |
| **Twin Lasers** | Paddle automatically fires dual upward laser bolts | 11 seconds |
| **Fireball** | Ball turns blazing orange and pierces every brick (even Steel!) | 9 seconds |
| **Magnet / Sticky** | Catches ball on paddle so you can aim and tap to release | 12 seconds |
| **Safety Shield** | Energy barrier at the bottom rescues falling balls | +2 charges (max 5) |
| **Extra Life** | Adds +1 Heart (up to 6) | Instant |
| **Coin Rush** | Instant +25 bonus coins | Instant |
| **Overdrive (TRAP ⚠️)** | Red-ringed hazard capsule — speeds up balls (+28%) | 6 seconds |
| **Shrink (TRAP ⚠️)** | Red-ringed hazard capsule — shrinks paddle (-30%) | 8 seconds |

## 7. Power-Up Shop, Boosters & Skins

- **7 Buyable Boosters:** Extra Heart (150), Wide Paddle (120), Triple Ball (200), Slow-Mo (100), Safety Shield (180), Twin Lasers (170), Fireball (190).
  - **Pre-Launch Arming:** Tap booster pills before launching to start the level powered up.
  - **Mid-Game Activation:** Tap booster pills or press keyboard keys `1`–`5` anytime during active play!
- **5 Paddle & Ball Skins:** Neon Pulse (Free), Sunset Rush (250), Acid Surge (400), Royal Storm (600), Muhib Gold (900). Skins stay unlocked permanently and change paddle gradients, ball glow, and trail colors.
- **Second Chance Continue:** On Campaign Game Over, spend 50 coins to continue the current board with +2 Lives.

## 8. Professional Statistics, Daily Missions & Achievements

Inside the **Stats** tab (4 clean sub-tabs):
1. **Ranks & Profile:** Editable Player Name, 10-icon Avatar Picker, Overall Rank & XP bar, 5 Category Mastery Ranks, and Personal Records across all 4 modes.
2. **Pro Stats:** Lifetime Score, Win Rate %, Total Games Played/Won, Bricks Broken, Average Best Combo, Perfect 3★ Clears, Bosses Defeated, Power-Ups Caught, Boosters Used, Daily Wins, Total Playtime, **Recent 10 Runs Score Trend Bar Chart**, and **Brick Destruction Breakdown Bars**.
3. **Daily Missions:** 3 daily objectives (*Brick Demolisher*, *Power Collector*, *Victory Lap*) resetting every midnight + Daily Challenge status.
4. **Awards (18 Achievements):** Claimable milestones rewarding Coins and +100 Rank XP each.

## 9. Controls & Settings

- **Touch / Mobile:** Drag anywhere to move paddle (adjustable Touch Sensitivity 60%–160%); quick tap to launch/release ball.
- **Mouse:** Move mouse to steer; click to launch/release.
- **Keyboard:** `←`/`→` or `A`/`D` move · `Space`/`Enter` launch/resume · `1`–`5` activate boosters · `P` pause · `R` restart · `F` fullscreen · `M` mute · `Esc` pause/close sheet.
- **Settings:** 3 Difficulty presets (*Chill*, *Classic*, *Frantic*), Touch Sensitivity, Haptics, Sound FX, Ball Trail, Screen Shake, High Effects, Reduced Motion, High Contrast mode, and confirmed Reset All Progress.

## 10. Automated Offline APK & Portable EXE via GitHub Actions

Everything is built **on GitHub's cloud runners** — your own PC needs no Android
Studio, no Java, no Node.js and no extra disk space. The pipeline lives in
`.github/workflows/build-apk-exe.yml`.

### When it runs
- Automatically on **every push** to `main` / `master` (i.e. every commit you upload).
- Manually from **Actions → Build Offline APK & Portable EXE → Run workflow**.

### What it produces

| Output | Built with | Highlights |
| :--- | :--- | :--- |
| `BrickPop-Nova-Ultimate.apk` | Capacitor 8 + Android Gradle | **Signed release APK** (stable key, so new builds install over old ones and keep your progress), immersive sticky **fullscreen**, portrait, screen kept awake, dark native splash, launcher icon generated from `logo-master.png`, `versionCode` increases on every build. |
| `BrickPop-Nova-Ultimate-Portable.exe` | Electron + electron-builder | **Single portable file** — no installer, no admin rights. Starts **fullscreen** (`F11` toggles), saves are written to `BrickPop-Nova-SaveData` next to the EXE, window icon generated from `logo-master.png`. |

### Why it really is 100% offline
- The only remote code in the web version (`pwa-register.js`, which loads Workbox
  from a CDN) is stripped from the packaged game by
  `.github/build/scripts/prepare-web.mjs`; the build also verifies that no
  external `src`/`href` references remain.
- All game art, sound effects and fonts are procedural/embedded — there are no
  file downloads at runtime.
- The Android app is built **without the `INTERNET` permission**, so it
  physically cannot use the network.
- The Windows app denies external navigation and blocks new windows.

### Where to download
1. **Releases** → `https://github.com/yasinULLAH/BricksPopGame/releases/latest`
   (rolling `latest-build` release, always the newest APK + EXE + `SHA256SUMS.txt`).
2. **Actions** → open the workflow run → **Artifacts** (kept for 90 days).

### Installing the APK on your phone
1. Download `BrickPop-Nova-Ultimate.apk` on the phone.
2. Open it and allow **"Install unknown apps"** for your browser / file manager.
3. Install (or tap **Update** if an older version is already installed).
4. Uninstall once only if you ever change the signing key.

### Build helpers (all inside `.github/build/`)
| File | Purpose |
| :--- | :--- |
| `scripts/prepare-web.mjs` | Builds the offline web root (strips the PWA/CDN bootstrap, checks for external links). |
| `scripts/generate-icons.mjs` | Generates every Android launcher icon (legacy, round, adaptive) and the Windows icon from `logo-master.png`. |
| `scripts/patch-android.mjs` | Immersive fullscreen activity, portrait lock, dark splash theme, removes `INTERNET`, injects version code/name. |
| `scripts/sign-android-apk.sh` | `zipalign` + `apksigner` release signing with verification. |
| `android/`, `windows/` | Capacitor and Electron project templates used by the workflow. |
| `keystore/brickpop-release.jks` | Personal-use signing key that keeps APK updates installable. |

> **Advanced (optional):** to sign with your own key, add the repository secrets
> `ANDROID_KEYSTORE_BASE64`, `ANDROID_KEYSTORE_PASSWORD`, `ANDROID_KEY_ALIAS`
> and `ANDROID_KEY_PASSWORD`. Switching keys requires uninstalling the old app once.

---

# 🇵🇰 حصہ دوم: مکمل اردو دستاویزات (Complete Urdu Documentation)

## 1. ایپ کا تعارف اور مقصد

**BrickPop Nova Ultimate** ایک مکمل آف لائن (بغیر انٹرنیٹ چلنے والا) جدید نیون آرکیڈ برک بریکر گیم ہے۔ یہ V3 کے خوبصورت انجن پر بنایا گیا ہے اور اس میں V1، V2 اور V3 کی تمام خصوصیات کو یکجا کر کے نئی جدید سہولیات شامل کی گئی ہیں:

- **مکمل آف لائن:** انٹرنیٹ کے بغیر فون اور کمپیوٹر پر تیز رفتاری سے چلتا ہے۔ کوئی بیرونی فائل یا انٹرنیٹ لنک درکار نہیں۔
- **بے شمار لیولز اور رینکس:** گیم کبھی ختم نہیں ہوتا، ہر لیول اور ہر سیکٹر کے ساتھ مشکل بڑھتی جاتی ہے اور کھلاڑی کا رینک اوپر جاتا ہے۔
- **خودکار محفوظ کاری:** آپ کے کوائنز، رینک، اسٹارز، اسکنز، بوسٹرز اور تمام اسٹیٹس خودکار طریقے سے آپ کے موبائل یا کمپیوٹر میں محفوظ رہتے ہیں۔

## 2. تمام 4 گیم موڈز

1. **🚀 ان لمیٹڈ کیمپین (Unlimited Campaign):** بے شمار لیولز جو 8 مختلف دنیاؤں (Worlds) اور لاتعداد سیکٹرز (Sector 1, 2, 3...) پر مشتمل ہیں۔ ہر 15واں لیول **باس بیٹل (Boss Battle)** ہوتا ہے۔
2. **♾️ اینڈلیس ویوز (Endless Waves):** لامتناہی لہریں جہاں اینٹوں کی دیوار آہستہ آہستہ نیچے آتی ہے۔ ہر تیسری ویو پر 1 اضافی جان (Heart) ملتی ہے اور ہر پانچویں ویو پر باس آتا ہے۔
3. **⏱️ ٹائم اٹیک (Time Attack):** 150 سیکنڈ کا تیز رفتار مقابلہ۔ ہر اسٹیج مکمل کرنے پر **+20 سیکنڈ** اضافی وقت ملتا ہے۔
4. **🌠 ڈیلی چیلنج (Daily Challenge):** ہر روز تاریخ کے حساب سے نیا خصوصی باس بورڈ، جسے مکمل کرنے پر اضافی کوائنز اور XP ملتے ہیں۔

## 3. بے شمار لیولز اور 8 دنیائیں (Worlds)

ہر سیکٹر میں 8 دنیائیں (کل 120 لیولز فی سیکٹر) ہیں اور سیکٹر 1 مکمل ہونے پر سیکٹر 2، 3، 4... لامحدود کھلتے جاتے ہیں:
1. Neon District (باس: THE INVADER)
2. Sunset Strip (باس: SOLAR HEART)
3. Acid Garden (باس: ACID SMILE)
4. Cryo Caverns — حرکت کرتی اینٹیں (باس: FROST CROWN)
5. Magma Core — خطرناک ریڈ کیپسولز (باس: MAGMA SKULL)
6. Violet Void (باس: VOID STAR)
7. Gilded Sky (باس: GILDED GEM)
8. Prism Storm (باس: THE PHOENIX)

لیولز اسکرین میں آپ سیکٹر بدل سکتے ہیں (`◀` / `▶`) اور لیولز کو **All، Open، 3★، Boss** کے حساب سے فلٹر کر سکتے ہیں۔

## 4. ان لمیٹڈ رینک، XP اور کیٹیگری ماسٹری سسٹم

اینٹیں توڑنے، لیول جیتنے، باس ہرانے، ڈیلی مشنز اور اچیومنٹس سے **Rank XP** ملتا ہے:
- **27 بنیادی رینکس:** Novice (I–III)، Bronze Breaker، Silver Striker، Gold Smasher، Platinum Crusher، Diamond Blaster، Master Architect، Grandmaster Nova، Mythic Legend۔
- **انفینٹ اوورلارڈ (Infinite Overlord P1, P2, P3... ∞):** لیول 27 کے بعد لامحدود پریسٹیج رینکس!
- **5 کیٹیگری رینکس:** Campaign Mastery، Endless Mastery، Time Attack Mastery، Combo Mastery اور Boss Slayer۔
- ہر رینک اپ پر خصوصی انعام (کوائنز) اور مبارکباد کا بینر آتا ہے۔

## 5. اینٹوں کی 8 اقسام

- **عام رنگین اینٹ:** 1 ہٹ میں ٹوٹتی ہے۔
- **مضبوط اینٹ (Armored 2 HP):** 2 ہٹ میں ٹوٹتی ہے، پہلے ہٹ پر دراڑ پڑتی ہے۔
- **بھاری اینٹ (Heavy 3+ HP):** 3 یا زیادہ ہٹ میں ٹوٹتی ہے۔
- **بم اینٹ (Explosive):** ٹوٹنے پر اردگرد کی تمام اینٹوں کو دھماکے سے اڑا دیتی ہے۔
- **فولادی اینٹ (Steel):** عام گیند سے نہیں ٹوٹتی، صرف **فائر بال (Fireball)** سے ٹوٹتی ہے۔
- **سنہری اینٹ (Gold):** زیادہ کوائنز (+12) دیتی ہے۔
- **گفٹ اینٹ (Gift):** یقینی طور پر کوئی فائدہ مند پاور اپ گراتی ہے۔
- **باس کور اینٹ (Crystal Core):** باس لیول کے درمیان موجود طاقتور اینٹ جس پر HP بار نظر آتی ہے اور سب سے زیادہ XP دیتی ہے۔

## 6. تمام 11 پاور اپس اور ٹریپس

- **Wide Paddle:** پیڈل 45% چوڑا ہو جاتا ہے۔
- **Multiball:** ایک گیند سے کئی گیندیں بن جاتی ہیں۔
- **Slow-Mo:** گیند کی رفتار کم ہو جاتی ہے۔
- **Twin Lasers:** پیڈل خودکار لیزر فائر کرتا ہے۔
- **Fireball:** آگ کی گیند جو ہر اینٹ (حتیٰ کہ اسٹیل) کو چیرتی ہوئی گزرتی ہے۔
- **Magnet / Sticky:** گیند پیڈل سے چپک جاتی ہے تاکہ آپ نشانہ لگا کر چھوڑ سکیں۔
- **Safety Shield:** نیچے حفاظتی لکیر بن جاتی ہے جو 2 بار گیند کو گرنے سے بچاتی ہے۔
- **Extra Life:** ایک اضافی دل (جان) ملتی ہے۔
- **Coin Rush:** فوری +25 کوائنز ملتے ہیں۔
- **Overdrive (خطرہ ⚠️):** سرخ کیپسول — گیند بہت تیز ہو جاتی ہے، اس سے بچیں!
- **Shrink (خطرہ ⚠️):** سرخ کیپسول — پیڈل چھوٹا ہو جاتا ہے، اس سے بچیں!

## 7. شاپ، بوسٹرز، اسکنز اور پروفیشنل اسٹیٹس

- **شاپ:** 7 قسم کے بوسٹرز خریدیں اور کھیل شروع کرنے سے پہلے یا کھیل کے دوران (بٹن دبا کر یا کی بورڈ پر `1` سے `5` دبا کر) استعمال کریں۔ 5 شاندار پیڈل اسکنز (بشمول *Muhib Gold*) ہمیشہ کے لیے ان لاک کریں۔
- **پروفیشنل اسٹیٹس (Stats ٹیب):** کھلاڑی کا نام اور اوتار بدلیں، آخری 10 گیمز کا گراف دیکھیں، ہر قسم کی ٹوٹی ہوئی اینٹوں کا فیصد، جیت کی شرح (Win Rate)، کل وقت، کومبو اوسط، 3 ڈیلی مشنز اور 18 اچیومنٹس۔
- **سیٹنگز:** مشکل کا درجہ (Chill / Classic / Frantic)، ٹچ سینسیٹیویٹی، ساؤنڈ ایفیکٹس، وائبریشن، بال ٹریل، اسکرین شیک، ہائی ایفیکٹس، ریڈیوسڈ موشن، ہائی کنٹراسٹ، فل اسکرین اور ری سیٹ۔

## 8. گٹ ہب ایکشنز سے خودکار APK اور EXE بنانا

پورا بلڈ عمل `.github/workflows/build-apk-exe.yml` میں موجود ہے اور **مکمل طور پر گٹ ہب کے سرورز پر** چلتا ہے — آپ کے کمپیوٹر پر نہ اینڈرائیڈ اسٹوڈیو، نہ جاوا، نہ نود جے ایس اور نہ کوئی اضافی جگہ درکار ہے۔

- **کب چلے گا:** جب بھی آپ `main` برانچ پر `commit` اور `push` کریں گے، خودکار طور پر چلے گا۔ یا **Actions → Build Offline APK & Portable EXE → Run workflow** سے دستی طور پر۔
- **APK (`BrickPop-Nova-Ultimate.apk`):** سائن شدہ ریلیز اے پی کے، مکمل فل اسکرین، اسکرین آن رہتی ہے، ڈارک اسپلاش اسکرین، آئیکن آپ کے `logo-master.png` سے بنتا ہے، اور ایپ میں **انٹرنیٹ کی اجازت ہی نہیں** رکھی جاتی (یعنی مکمل آف لائن)۔ نیا ورژن پرانے کے اوپر براہِ راست انسٹال ہو جاتا ہے اور آپ کا سیو شدہ ڈیٹا محفوظ رہتا ہے۔
- **EXE (`BrickPop-Nova-Ultimate-Portable.exe`):** ایک ہی پورٹیبل فائل، انسٹال کی ضرورت نہیں، ایڈمن رائٹس نہیں چاہیے، کھلتے ہی فل اسکرین (`F11` سے تبدیل کریں)، سیو ڈیٹا EXE کے ساتھ `BrickPop-Nova-SaveData` میں محفوظ ہوتا ہے۔
- **ڈاؤن لوڈ:** `https://github.com/yasinULLAH/BricksPopGame/releases/latest` پر ہمیشہ تازہ ترین APK اور EXE موجود ہوں گے (ساتھ `SHA256SUMS.txt` بھی)۔ اس کے علاوہ ہر بلڈ کے **Actions → Artifacts** سے بھی ڈاؤن لوڈ ہو سکتے ہیں۔
- **آف لائن کی ضمانت:** پیکج بناتے وقت CDN سے آنے والی `pwa-register.js` فائل نکال دی جاتی ہے اور چیک کیا جاتا ہے کہ گیم میں کوئی بیرونی لنک باقی نہ ہو۔ تمام گرافکس اور آوازیں خود گیم کے اندر بنتی ہیں۔

---

## © کاپی رائٹ اور مصنف کی معلومات (Copyright & Author)

- **مصنف (Author):** Yasin Ullah — Bannu Software Solutions
- **واٹس ایپ (WhatsApp):** `0336-1593533`
- **انتساب (Dedication):** Dedicated to my little **Muhib Ullah** 💛
- **اجازت نامہ:** اس گیم/ایپ کی نقل، تبدیلی یا دوبارہ استعمال مصنف **یاسین اللہ (Yasin Ullah)** کی اجازت اور نام کے حوالے کے بغیر سختی سے ممنوع ہے۔
