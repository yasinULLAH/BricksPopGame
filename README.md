# 🧱 BRICKPOP NOVA ULTIMATE — Complete Bilingual Documentation (English & اردو)

> **💛 Dedication / انتساب:** Dedicated with love to my little **Muhib Ullah** — *یہ ایپ مصنف کی طرف سے اپنے پیارے بیٹے **محب اللہ** کے نام منسوب ہے۔*
>
> **© Copyright Notice:** Copyright © 2026 **Yasin Ullah — Bannu Software Solutions**. All Rights Reserved.
> Copying, modification, redistribution, reverse engineering, or reuse of this application, source code, design, or assets is **STRICTLY PROHIBITED** without prior permission and mandatory attribution to the original author (**Yasin Ullah**).

---

## 📌 Repository & Version Structure

| File | Role | Description |
| :--- | :--- | :--- |
| `index.html` | **Main Application (Unified V3 Ultimate)** | The flagship single-file offline neon arcade game combining **every feature from V1, V2, and V3**, plus **Unlimited Levels & Sectors (24 Blueprints)**, **8 Game Modes (including Brick Break Maze, Number Bricks, Random Arcade Studio & Boss Rush)**, **Custom Level Studio**, **28 Rank Tiers (140 Divisions + Infinite Prestige)**, **15 Category Masteries**, **23 Power-Ups & Traps**, **120 Sculpted Skins**, **10 Light/Dark Themes**, **6 Workshop Upgrades**, **Nova Blast Ultimate**, **Lucky Wheel**, **36 Pro Stats**, **Daily & Unlimited Missions**, **JSON Backup/Restore**, **Copyright**, and **Dedication**. |
| `indexV1.html` | Legacy Version 1 (`Brick Blitz`) | Original V1 archived for version reference. |
| `indexV2.html` | Legacy Version 2 (`BrickPop Nova`) | Original V2 archived for version reference. |
| `README.md` | Full Bilingual Documentation | Complete technical and user guide in **English & Urdu**. |
| `CLIENT-README.md` | Client-Only Simple Urdu Guide | 100% plain Urdu non-technical handbook with step-by-step instructions and exhaustive FAQ. |
| `FEATURES-REPORT.md` | Executive Feature Report | Structured tabular breakdown of every module, capability, and highlight. |
| `.github/workflows/build-apk-exe.yml` | Cloud Build Pipeline | GitHub Actions workflow that automatically compiles a **100% offline fullscreen Android APK** and **standalone portable Windows EXE** on every commit, using `logo-master.png` for both app icons. |

---

# 🇬🇧 PART 1: COMPLETE ENGLISH DOCUMENTATION

## 1. Overview & Purpose

**BrickPop Nova Ultimate** is a 100% offline, single-file neon arcade brick-breaker built on the V3 high-DPI HTML5 Canvas and procedural Web Audio synthesizer engine, unified with every module from V1 and V2 and upgraded with infinite progression and pro-grade physics:

- **Zero Internet Required:** Zero external CDN dependencies, zero external fonts, zero audio file downloads. All graphics, 120 sculpted paddle/ball skins, sprites, particle effects, and arcade sound effects (SFX-only, no music) are procedurally generated locally.
- **Industry-Standard Containment & Ball Physics:** Features expanded top sky-runway clearance above brick layouts, upward corner **Entry-Assist** (so shots glide cleanly into narrow channels), **Interior Chamber-Retention** bounce physics (so balls stay rattling inside brick pockets), smart anti-loop steering, **Bounded Vertical Paddle Movement**, and **Pre-Launch Directional Aiming**.
- **Cross-Platform Fullscreen Ready:** Plays smoothly in mobile browsers, desktop browsers, PWA/WebView (with Portrait/Landscape orientation toggle), standalone Android APK, and portable Windows EXE.
- **Automatic Local Persistence + JSON Backups:** Every coin, XP point, rank, level star, skin, workshop upgrade, booster, custom stage, daily/unlimited mission, and statistic is saved automatically to local storage, with full **Export / Import Save Backup** support.

## 2. Game Modes (All 8 Modes + Custom Level Studio)

| Mode | Description | Escalation & Rewards |
| :--- | :--- | :--- |
| **🚀 Unlimited Campaign** | Infinite levels across **24 handcrafted-style architectural blueprints** (side sky-chutes, one-way baffle traps, chain reactors, twin vaults, hourglasses, spirals & more) grouped into 8 themed Worlds (15 levels/world) across **Unlimited Sectors (Sector 1 → ∞)**. Every 15th level is a **Boss Formation**. | Speed, armored HP, moving bricks, Boss Plasma Attacks, Enrage phase, and Crystal Boss Core HP scale up every level and Sector. Awards 1–3 Stars, Coins, Flawless 3★ bonus, Boss bounty, and Rank XP. |
| **🧩 Brick Break Maze** | Dedicated viral tunnel & micro-brick containment mode with **4 Difficulties** (`Easy`, `Medium`, `Hard`, `Hardest`), **Auto Mix (∞)** + **13 distinct containment silhouettes** (Sky-Chute Fortress, Flared Baffle Funnel, Armored Rainbow Prism, L-Bend Pinball Maze, Pixel Titan Cavern, Twin Canyon Bunkers, Diamond Bastion, Hourglass Reactor, Inward Snail Spiral, Terraced Pixel Wall, Burrow Tunnels, Pinball Bumper Vault, Neon Number Blocks), live board previews, and **Unlimited Maze Mission Contracts**. | Easy-in, hard-out containment geometry with BFS reachability guarantee, buried `×2`/`×3`/`+3` multiplier orbs, breach plugs, optional countdown timer, and high coin/XP payouts. |
| **🔢 Number Bricks (Hit-Counter Mode)** | Dedicated hit-counter brick mode where every brick displays its live remaining HP number (e.g. `12`, `28`, `50`, `85`) and dynamically shifts color as it counts down to zero! Features **4 Difficulties** (`Easy 3–12 HP`, `Medium 8–28 HP`, `Hard 16–50 HP`, `Hardest 28–85 HP`), **Auto Mix (∞)** + **10 unique numbered formations**, live previews showing total hits required, and **Unlimited Number-Brick Mission Contracts**. | Designed for massive multiball swarms (`+3`, `×2`, `×3` orbs), Acid Melt, Chain Lightning, and Titan Ball combos. Tracks Number Bricks Best Score & Clears. |
| **🎲 Random Arcade Studio** | Infinite cryptographic-entropy (`crypto.getRandomValues`) unique board generator with **4 Difficulties**, **Auto Mix (∞)** + **19 genuinely distinct silhouettes**, **7 Arena Modifiers** (*Balanced*, *Bomb Fiesta*, *Gold Vein Rush*, *Armor Siege*, *Kinetic Shift*, *Gift Bonanza*, *Reactor Core Hunt*), anti-repeat history engine, live previews, and **Unlimited Procedural Mission Contracts**. | Every roll produces a genuinely new silhouette & footprint (never locked to a single formation). Optional countdown timer and +50% tactical mission bonuses. |
| **♾️ Endless Waves** | Survive infinite waves while the brick wall descends on a tightening timer. | Every cleared wave increases ball speed and shortens descent intervals. Every 5th wave is a Boss Wave; every 3rd wave restores +1 Heart. Tracks Endless Best Score and Highest Wave. |
| **⏱️ Time Attack** | Fast-paced 150-second speedrun mode. Clear stages rapidly to earn **+20 bonus seconds** per cleared board. | Tracks Time Attack Record and awards Coins + Rank XP per cleared speed stage. |
| **👑 Boss Rush** | Back-to-back gauntlet of all 8 pixel-art World Bosses (scaling endlessly into Ω-2, Ω-3...) with live Boss HP bar, Enrage mode at 45% HP, and plasma projectile attacks. | Restores +1 Heart on each boss clear and awards escalating Boss bounties (+65 coins & +110 XP per stage). Tracks Boss Rush Best Score & Stage. |
| **🌠 Daily Challenge** | A unique, date-seeded cosmic Boss board generated fresh from the local calendar date every day. | Optional 180-second countdown, high rewards (+160 base coins + XP), and Daily Hero achievement progress. |
| **🛠️ Custom Level Studio** | Built-in visual stage editor with 9 brick brushes, horizontal mirror symmetry toggle (`🪞`), random pattern generator (`🎲`), 8 local save slots, Base64 **Share / Import Level Code**, and instant **Test Play**. | Play, save, and share your own brick formations offline. |

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

In the **Levels** tab, players can switch Sectors (`◀` / `▶`), select any of the 8 Worlds, and filter levels by **All**, **Open**, **3★**, or **Boss**, with live mini-canvas previews (including multiplier orbs) for every single stage.

## 4. Unlimited Rank, XP & Category Mastery System

Players earn **Rank XP** from breaking bricks, clearing levels, defeating bosses, shooting down Golden Supply Drones, completing Daily & Unlimited Missions, claiming Achievements, and playing all 8 modes.

### Overall Rank Ladder (28 Tiers × 5 Divisions = 140 Core Ranks + Infinite Prestige)
Each rank requires `120 × (Level^1.22)` XP to advance across **28 unique Tiers** (each with Divisions `I, II, III, IV, V`):
- **Tiers 1–10:** Recruit 🌱 · Apprentice 🪨 · Iron Cadet ⚙️ · Bronze Breaker 🥉 · Copper Vanguard 🛡️ · Silver Striker 🥈 · Cobalt Ranger 🔹 · Gold Smasher 🥇 · Amber Raider 🔶 · Platinum Crusher 💠
- **Tiers 11–20:** Emerald Guardian 🟢 · Sapphire Sentinel 🔷 · Ruby Executioner ♦️ · Diamond Blaster 💎 · Obsidian Phantom 🖤 · Titanium Warlord ⚔️ · Master Architect ⚡ · Grandmaster Nova 🔥 · Champion Conqueror 🏆 · Apex Predator 🦅
- **Tiers 21–28:** Celestial Sovereign 🌟 · Astral Titan ☄️ · Quantum Valkyrie 🧬 · Galactic Archon 🪐 · Mythic Overlord 👑 · Transcendent Ascendant 🌌 · Eternal Omniverse ♾️ · **Supreme Muhib Sovereign** 💛
- **Infinite Prestige (Rank 141 → ∞):** **Omniverse Apex** (`P1`, `P2`, `P3`, ... `∞`) 🌌

Every Rank-Up triggers a live celebratory banner, sound fanfare, and bonus coin reward (`50 + Rank × 10` coins).

### 15 Category Mastery Ranks (12 Tiers Each: Unranked → Supreme Sovereign XII → Omniverse Tier+)
1. Campaign Conqueror · 2. Star Collector · 3. Flawless Specialist · 4. Brick Annihilator · 5. Combo Grandmaster · 6. Boss Executioner · 7. Endless Survivor · 8. Time Attack Blitzer · 9. Boss Rush Gladiator · 10. Random Arena Pioneer · 11. Nova Shockwave Ace · 12. Supply Drone Hunter · 13. Critical Sniper · 14. Power-Up Alchemist · 15. Galactic Tycoon.

## 5. Complete Brick Types (10 Types + Numbered HP Blocks & Arena Orbs)

| Brick / Entity | Behavior & Effect |
| :--- | :--- |
| **Normal Colored Brick** | 1 HP. Standard points, coins, and XP. |
| **Armored Brick (2 HP)** | 2 HP with status pips and fracture cracks on hit. |
| **Heavy Armored Brick (3+ HP)** | 3–5 HP (scales higher in Sector 2+), high score & coins. |
| **Explosive Bomb Brick** | Detonates a 3×3 chain-reaction blast wave damaging all surrounding bricks. |
| **Indestructible Steel Brick** | Deflects normal balls with metallic sparks; broken only by **Fireball** / **Nova Blast** (lasers pierce through when enabled). |
| **Gold Coin Brick** | Drops high coin bursts (+12 coins) and bonus score. |
| **Gift Capsule Brick** | Guaranteed drop of a beneficial power-up capsule. |
| **Crystal Boss Core Brick** | High-HP glowing star brick with live HP bar inside Boss formations; huge XP & score. |
| **Gold Breach Plug (`+4`)** | Shattering opens nearby doorway plugs and unleashes a **+4 Multiball Swarm**! |
| **Crimson Pocket Trigger (`+3`)** | Spawns **+3 extra balls** and triggers a wide pocket explosion! |
| **Numbered Hit-Counter Blocks** | Live countdown HP numbers (`3` to `85+`) with dynamic heat-map color transitions and mini HP bars (featured in **Number Bricks** & **Neon Number Blocks**). |
| **Arena Multiplier Orbs (`+3`, `×2`, `×3`)** | Floating glowing orbs placed inside upper pockets and corridors that multiply or spawn extra balls on contact! |
| **Golden Supply Drone (`★UFO★`)** | Bonus flying UFO crossing the top sky-runway; hitting it drops a coin shower (+35 coins), +350 score, +22% Nova charge, and a guaranteed positive power-up! |

## 6. All 23 Power-Up Capsules & Traps (Extended Pro Durations + Stackable!)

All timed power-ups feature extended arcade durations (**13–18 seconds**), scale further with the **Capacitor Bank** Workshop upgrade, and support **Stackable Power-Ups** (collecting multiples increases width, fire rate, damage, and duration):

| Capsule | Effect | Duration / Charges |
| :--- | :--- | :--- |
| **Wide Paddle** | Expands paddle width by +45% (stackable) | 18 seconds |
| **Multiball** | Splits every active ball ×3 | Instant |
| **Ball Storm +5** | Launches 5 extra balls in a fan burst from the paddle | Instant |
| **Slow-Mo** | Reduces ball speed for precision control (stackable) | 14 seconds |
| **Twin Lasers** | Paddle auto-fires dual laser bolts (scales up to 5 pairs + center cannon when stacked!) | 15 seconds |
| **Homing Rockets** | Paddle auto-fires homing missiles that curve directly into breakable bricks | 15 seconds |
| **Fireball** | Ball turns blazing orange and pierces every brick (even Steel!) | 13 seconds |
| **Titan Ball** | Enlarges balls (+55% radius per stack) and deals **2× smash damage** | 16 seconds |
| **Chain Lightning** | Every ball hit arcs crackling lightning bolts to 2–4 nearby bricks | 15 seconds |
| **Blast Ball** | Every brick hit triggers a 3×3 shockwave explosion | 14 seconds |
| **Acid Melt** | Coats hit bricks in corrosive acid dealing damage-over-time (devastating in Number Bricks!) | 15 seconds |
| **Split-on-Hit** | Every 5th brick hit automatically spawns a bonus ball from the brick | 14 seconds |
| **Cryo Freeze** | Freezes moving bricks, Boss plasma fire, and Endless wall descent + deals **+1 bonus damage** | 15 seconds |
| **Loot Vortex** | Pulls ALL positive power-up capsules across the entire arena straight to your paddle | 16 seconds |
| **2× Score Surge** | Doubles all Score & Rank XP earned (stacks up to ×4!) | 18 seconds |
| **Magnet / Sticky** | Catches ball on paddle so you can aim directionally and tap to release | 16 seconds |
| **Safety Shield** | Energy barrier at the bottom rescues falling balls | +2 charges (stackable) |
| **Nova Charge** | Instantly charges **Nova Blast Ultimate** to 100% READY! | Instant |
| **Extra Life** | Adds +1 Heart | Instant |
| **Coin Rush** | Instant +30 bonus coins | Instant |
| **Overdrive (TRAP ⚠️)** | Red-ringed hazard capsule — speeds up balls (+25%) | 8 seconds |
| **Shrink (TRAP ⚠️)** | Red-ringed hazard capsule — shrinks paddle (-28%) | 9 seconds |
| **Invert Glitch (TRAP ⚠️)** | Red-ringed hazard capsule — temporarily reverses horizontal steering | 7 seconds |

## 7. Workshop, Armory, Boosters, Skins, Nova Blast & Lucky Wheel

- **⚡ Nova Blast Ultimate:** Breaking bricks and collecting power-ups charges your **Nova Core (0% → 100%)**. At 100%, press `E` / `Shift`, tap `⚡ READY`, or double-tap the arena to unleash a full-arena shockwave that wipes enemy hazards and damages every brick on screen!
- **🔧 6 Permanent Tech Workshop Upgrades (5 Levels Each = 30 Tech Levels):**
  1. **Tractor Beam** (pulls nearby capsules toward paddle, +26px/lvl)
  2. **Fortune Minter** (+10% bonus coins from all sources/lvl)
  3. **Combo Stabilizer** (+0.45s combo decay timer/lvl)
  4. **Capacitor Bank** (+10% positive power-up duration/lvl)
  5. **Critical Core** (+8% chance per level for 2× CRIT hits)
  6. **Nova Overcharger** (+18% faster Nova Blast charging/lvl)
- **7 Tactical Boosters:** Extra Heart (150), Wide Paddle (120), Triple Ball (200), Slow-Mo (100), Safety Shield (180), Twin Lasers (170), Fireball (190). Arm before launch or activate mid-game via HUD icons or keys `1`–`7`!
- **120 Sculpted & Animated Paddle & Ball Skins:** Filterable across **Starter, Common, Rare, Epic, Mythic, Legendary, Cosmic, Immortal, and Omniverse** tiers (including *Starfighter X-99*, *Doom Chainsaw*, *Muramasa Twin-Blade*, *Thunderbolt Arc Coil*, *Black Hole Singularity*, *Muhib Gold*, *Muhib Sovereign Crown*, and *Muhib Eternal Monarch*) with live animated canvas previews in the Armory.
- **🎡 Daily Nova Lucky Wheel:** 1 free spin every day (extra spins 120 coins) with 8 prizes including Coins, Rank XP, Boosters, and the **500-Coin Jackpot**.
- **Second Chance Continue:** On Campaign Game Over, spend 50 coins to continue the current board with +2 Lives.

## 8. Professional Statistics, Daily & Unlimited Missions, Awards & Codex

Inside the **Stats** tab (5 clean sub-tabs):
1. **Ranks (140+):** Editable Player Callsign, 10-icon Avatar Picker, Overall Rank Hero Card with Division Pips, **15 Category Mastery Ranks**, and full **28-Tier Rank Roadmap**.
2. **Pro Stats (36):** 36 lifetime KPI telemetry tiles across *Combat & Destruction (12)*, *Precision, Combo & Survival (12)*, and *Mode Records & Empire Economy (12)*, plus **Recent 10 Runs Score Trend Bar Chart** and **Brick Destruction Breakdown Bars**.
3. **Missions:** **Unlimited Procedural Mission Contracts** (auto-refreshing across Easy/Medium/Hard/Hardest with live previews & reroll) + **4 Daily Missions** (*Brick Demolisher*, *Power Collector*, *Victory Lap*, *Nova Commander*) + Daily Challenge launcher.
4. **Awards (22 Achievements):** Claimable milestones rewarding Coins and +100 Rank XP each (including *Nova Unleashed*, *Drone Hunter*, *Tech Engineer*, and *Contract Mercenary*).
5. **Codex:** Visual reference encyclopedia for all **10 Brick Types** and all **8 World Bosses**.

## 9. Controls, 10 Themes & Pro Settings Studio (50+ Settings)

- **10 Switchable Industry Themes (4 Light + 6 Dark):** *Nova Cyber*, *Daylight Studio*, *Clinical Pearl*, *Nordic Frost*, *Sakura Pastel*, *OLED Pitch*, *Midnight Slate*, *Emerald Matrix*, *Royal Obsidian*, and *Sunset Outrun* — switchable from Settings or the top header palette icon.
- **Touch / Mobile:** Relative Drag, Direct Follow, or on-screen Tap Left/Right pad; **Bounded Vertical Paddle Movement**, **Pre-Launch Directional Aim**, adjustable Touch Sensitivity (50%–200%), Paddle Height Offset, Double-Tap Nova Blast, and Portrait/Landscape orientation toggle.
- **Mouse:** Direct pointer follow (window-level tracking so hovering HUD buttons never freezes the paddle), scroll-wheel steering, click to launch.
- **Keyboard:** `←`/`→` or `A`/`D` horizontal · `↑`/`↓` or `W`/`S` vertical · `Q`/`E` or `[`/`]` aim launch · `Space`/`Enter` launch/resume · `1`–`7` activate boosters · `E`/`Shift` Nova Blast · `P` pause · `R` restart · `F` fullscreen · `M` mute · `Esc` pause/close sheet.
- **Pro Settings Studio:** Ball Speed/Size & Paddle Width multipliers, Speed Ramp, Drop Rate/Speed, Edge Bounce Angle, Auto-Launch Timer, Drone Frequency, Stackable Power-Ups, Lasers Pierce Steel, Auto-Breach Steel, Mission Countdown Timer toggle, Sound FX Studio (SFX-only, 3 synth timbres, micro-pitch variation, combo chimes — zero music), Graphics & VFX (Render Resolution, Skin Anim Speed, Trail Length, Arena Cyber Grid, 4 Brick Surface Finishes, Particle Density, Scanlines, Live FPS Counter), Accessibility (Colorblind Assist Symbols, High Contrast, Large HUD, Reduced Motion), and **JSON Save Export / Import Backup**.

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
| `BrickPop-Nova-Ultimate.apk` | Capacitor 8 + Android Gradle | **Signed release APK** (stable key, so new builds install over old ones and keep your progress), immersive sticky **fullscreen**, portrait/landscape support, screen kept awake, dark native splash, launcher icon generated from `logo-master.png`, `versionCode` increases on every build. |
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

**BrickPop Nova Ultimate** ایک مکمل آف لائن (بغیر انٹرنیٹ چلنے والا) جدید نیون آرکیڈ برک بریکر گیم ہے۔ یہ V3 کے خوبصورت انجن پر بنایا گیا ہے اور اس میں V1، V2 اور V3 کی تمام خصوصیات کو یکجا کر کے بہت سی نئی پروفیشنل سہولیات شامل کی گئی ہیں:

- **مکمل آف لائن:** انٹرنیٹ کے بغیر فون اور کمپیوٹر پر تیز رفتاری سے چلتا ہے۔ کوئی بیرونی فائل یا انٹرنیٹ لنک درکار نہیں۔
- **پروفیشنل لیول ڈیزائن اور فزکس:** اوپر گیند گزرنے کے لیے کشادہ جگہ، سائیڈ اسکائی شوٹس، ون وے بیفل ٹریپس (گیند اندر آسانی سے جاتی ہے اور اندر پھنس کر اینٹیں توڑتی رہتی ہے)، عمودی پیڈل حرکت (اوپر نیچے) اور گیند چھوڑنے سے پہلے نشانہ لگانے کی سہولت۔
- **بے شمار لیولز اور 140+ رینکس:** گیم کبھی ختم نہیں ہوتا، 8 گیم موڈز، کسٹم لیول اسٹوڈیو، 120 اسکنز، 10 تھیمز اور 23 پاور اپس۔
- **خودکار محفوظ کاری اور بیک اپ:** آپ کا تمام ڈیٹا خودکار محفوظ رہتا ہے اور آپ سیٹنگز سے JSON بیک اپ Export اور Import بھی کر سکتے ہیں۔

## 2. تمام 8 گیم موڈز + کسٹم لیول اسٹوڈیو

1. **🚀 ان لمیٹڈ کیمپین (Unlimited Campaign):** 24 جدید نقشوں، 8 مختلف دنیاؤں اور لاتعداد سیکٹرز (Sector 1, 2, 3...) پر مشتمل۔ ہر 15واں لیول **باس بیٹل (Boss Battle)** ہوتا ہے۔
2. **🧩 برک بریک میز (Brick Break Maze):** 4 درجوں (Easy تا Hardest) اور 13 منفرد ٹنل/بیفل نقشوں پر مشتمل، جس میں ملٹی بال آربز (`×2`/`×3`/`+3`) اور لامحدود میز مشنز شامل ہیں۔
3. **🔢 نمبر برکس (Number Bricks — ہٹ کاؤنٹر موڈ):** وہ خاص موڈ جہاں ہر اینٹ پر اس کے ٹوٹنے کی گنتی (جیسے `12`، `28`، `50`، `85`) لکھی ہوتی ہے اور ہر ہٹ پر نمبر کم ہوتا ہے۔ 4 درجے، 10 منفرد نقشے اور لامحدود مشنز۔
4. **🎲 رینڈم آرکیڈ اسٹوڈیو (Random Mode):** ہر بار بالکل نیا اور منفرد نقشہ! 19 الگ شکلیں، 7 ارینا موڈیفائرز، اینٹی ریپیٹ انجن، لائیو پری ویو اور لامحدود مشن کنٹریکٹس۔
5. **♾️ اینڈلیس ویوز (Endless Waves):** لامتناہی لہریں جہاں اینٹوں کی دیوار آہستہ آہستہ نیچے آتی ہے۔ ہر تیسری ویو پر 1 اضافی جان ملتی ہے اور ہر پانچویں ویو پر باس آتا ہے۔
6. **⏱️ ٹائم اٹیک (Time Attack):** 150 سیکنڈ کا تیز رفتار مقابلہ۔ ہر اسٹیج مکمل کرنے پر **+20 سیکنڈ** اضافی وقت ملتا ہے۔
7. **👑 باس رش (Boss Rush):** لگاتار تمام 8 ورلڈ باسز کا مقابلہ، لائیو باس HP بار اور پلازما حملوں کے ساتھ۔
8. **🌠 ڈیلی چیلنج (Daily Challenge):** ہر روز تاریخ کے حساب سے نیا خصوصی باس بورڈ۔
9. **🛠️ کسٹم لیول اسٹوڈیو (Level Studio):** اپنے خود کے لیول بنائیں، 8 سلاٹس میں محفوظ کریں، کوڈ شیئر/امپورٹ کریں اور فوراً کھیلیں!

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

اینٹیں توڑنے، لیول جیتنے، باس ہرانے، گولڈن ڈرون گرانے، مشنز اور اچیومنٹس سے **Rank XP** ملتا ہے:
- **140 بنیادی رینکس (28 درجات × 5 ڈویژنز I–V):** Recruit سے لے کر **Supreme Muhib Sovereign V** تک!
- **اومنی ورس پریسٹیج (Omniverse Apex P1, P2, P3... ∞):** لیول 140 کے بعد لامحدود پریسٹیج رینکس!
- **15 کیٹیگری ماسٹری رینکس:** ہر موڈ اور مہارت (کیمپین، اسٹارز، فلولیس، اینٹیں، کومبو، باس، اینڈلیس، ٹائم اٹیک، باس رش، رینڈم، نووا بلاسٹ، ڈرون ہنٹر، کریٹیکل، پاور اپس اور کوائنز) کے 12 درجے۔
- ہر رینک اپ پر خصوصی انعام (کوائنز) اور مبارکباد کا بینر آتا ہے۔

## 5. اینٹوں کی 10 اقسام + نمبر بلاکس اور آربز

- **عام رنگین اینٹ:** 1 ہٹ میں ٹوٹتی ہے۔
- **مضبوط اینٹ (Armored 2 HP):** 2 ہٹ میں ٹوٹتی ہے، پہلے ہٹ پر دراڑ پڑتی ہے۔
- **بھاری اینٹ (Heavy 3–5 HP):** 3 یا زیادہ ہٹ میں ٹوٹتی ہے۔
- **بم اینٹ (Explosive):** ٹوٹنے پر اردگرد کی تمام اینٹوں کو دھماکے سے اڑا دیتی ہے۔
- **فولادی اینٹ (Steel):** عام گیند سے نہیں ٹوٹتی، صرف **فائر بال** یا **نووا بلاسٹ** سے ٹوٹتی ہے۔
- **سنہری اینٹ (Gold):** زیادہ کوائنز (+12) دیتی ہے۔
- **گفٹ اینٹ (Gift):** یقینی طور پر کوئی فائدہ مند پاور اپ گراتی ہے۔
- **باس کور اینٹ (Crystal Core):** باس لیول کے درمیان موجود طاقتور اینٹ جس پر HP بار نظر آتی ہے۔
- **گولڈ بریچ پلگ (`+4`):** ٹوٹتے ہی دروازہ کھولتا ہے اور 4 اضافی گیندیں چھوڑتا ہے۔
- **کرمنسن پاکٹ ٹریگر (`+3`):** 3 اضافی گیندیں چھوڑتا ہے اور اردگرد دھماکہ کرتا ہے۔
- **نمبر بلاکس اور ملٹی بال آربز (`+3`, `×2`, `×3`):** گنتی والی اینٹیں اور چمکدار آربز جو گیندوں کو کئی گنا بڑھا دیتے ہیں، نیز **گولڈن سپلائی ڈرون (★UFO★)** جو اوپر اڑتا ہے۔

## 6. تمام 23 پاور اپس اور ٹریپس (زیادہ دورانیہ: 13–18 سیکنڈ)

- **Wide Paddle (18s):** پیڈل چوڑا ہو جاتا ہے۔
- **Multiball / Ball Storm +5:** گیندیں تین گنا یا فوری +5 اضافی گیندیں۔
- **Slow-Mo (14s):** گیند کی رفتار آہستہ۔
- **Twin Lasers (15s):** پیڈل سے خودکار لیزر فائرنگ۔
- **Homing Rockets (15s):** خودکار نشانہ لگانے والے میزائل!
- **Fireball (13s):** آگ کی گیند جو ہر اینٹ (حتیٰ کہ اسٹیل) کو چیرتی گزرتی ہے۔
- **Titan Ball (16s):** بہت بڑی گیند جو دوگنا نقصان (2×) دیتی ہے۔
- **Chain Lightning (15s):** آس پاس کی اینٹوں کو بجلی کے جھٹکے!
- **Blast Ball (14s):** ہر ضرب پر 3×3 دھماکہ۔
- **Acid Melt (15s):** اینٹوں کو تیزاب سے آہستہ آہستہ پگھلاتا ہے۔
- **Split-on-Hit (14s):** ہر پانچویں ہٹ پر نئی گیند نکلتی ہے۔
- **Cryo Freeze (15s):** حرکت کرتی اینٹیں، باس کے حملے اور دیوار کو جما دیتا ہے + اضافی نقصان۔
- **Loot Vortex (16s):** پوری اسکرین کے تمام اچھے کیپسول پیڈل کی طرف کھینچ لیتا ہے۔
- **2× Score Surge (18s):** اسکور اور XP دوگنا (اسٹیک ہونے پر 4× تک)۔
- **Magnet / Sticky (16s):** گیند پیڈل سے چپک جاتی ہے تاکہ نشانہ لگا کر چھوڑ سکیں۔
- **Safety Shield / Nova Charge / Extra Life / Coin Rush (+30):** نیچے حفاظتی لکیر، فوری 100% نووا بلاسٹ، اضافی دل اور فوری سکے۔
- **3 خطرات (ٹریپس ⚠️):** Overdrive (تیز گیند)، Shrink (چھوٹا پیڈل) اور Invert Glitch (الٹے کنٹرول) — ان سرخ کیپسولز سے بچیں!

## 7. شاپ، ورکشاپ، 120 اسکنز، لکی وہیل، 10 تھیمز اور پروفیشنل اسٹیٹس

- **ورکشاپ اور شاپ:** 6 مستقل ٹیک اپگریڈز (Tractor Beam، Fortune Minter، Combo Stabilizer، Capacitor Bank، Critical Core، Nova Overcharger)، 7 بوسٹرز (کی بورڈ `1`–`7`)، **120 اینیمیٹڈ پیڈل اور بال اسکنز** اور روزانہ مفت **نووا لکی وہیل**۔
- **نووا بلاسٹ الٹیمیٹ (⚡):** چارج 100% ہونے پر `E` / `Shift` یا بٹن دبا کر پوری اسکرین پر دھماکہ کریں!
- **پروفیشنل اسٹیٹس (Stats ٹیب):** 140+ رینکس، 15 کیٹیگری ماسٹری، 36 تفصیلی اسٹیٹس، آخری 10 گیمز کا گراف، اینٹوں کا حساب، لامحدود مشنز، 4 ڈیلی مشنز، 22 اچیومنٹس اور مکمل **کوڈیکس (Codex)**۔
- **10 تھیمز اور 50+ سیٹنگز:** 4 لائٹ اور 6 ڈارک تھیمز، کنٹرولز، ساؤنڈ ایفیکٹس اسٹوڈیو (بغیر میوزک)، گرافکس، کلر بلائنڈ سمبلز، پورٹریٹ/لینڈاسکیپ تبدیلی اور JSON بیک اپ Export/Import۔

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
