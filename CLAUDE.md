# CLAUDE.md - ComboBreaker V6

## Project Overview

ComboBreaker is a browser-based roguelike mecha combat and progression game. The player controls "Pilot 72632" commanding a remote mech through enemy encounters, trading, mining, and story-driven exploration across 10 distinct sci-fi locations. It features permadeath tracking, deep equipment customization (9 slots), resource mining, and persistent saves via localStorage.

**Version:** v1.1.0

## Architecture

This is a **zero-dependency, vanilla JavaScript** application. No build tools, frameworks, bundlers, or package managers are used.

### File Structure

```
combobreaker_V6/
├── index.html              # Monolithic app: HTML + CSS + game engine (~3,165 lines)
├── items.js                # Equipment database (600+ items, 9 types)
├── storyitems.js           # Collectible lore items (logs, keys, DNA tags, debris)
├── enemies.js              # Generic enemy templates
├── encounters.js           # Generic encounter templates
├── enemies_*.js            # Location-specific enemies (10 files)
├── encounters_*.js         # Location-specific encounters (11 files, includes home)
├── mining_*.js             # Location-specific minerals (11 files, includes asteroid belt)
├── ambush_*.js             # Location-specific ambush enemies (10 files)
└── images/                 # UI images and GIFs
    ├── IMAGE.gif, STATS.gif, INSTALLATIONS.gif, PILOT.gif
    ├── LOCATION.gif, MINING.gif, STORAGE.gif, STORE.gif
```

**Total:** 1 HTML file, 46 JS data files, 8 image assets.

### Data File Naming Convention

All JS data files follow the pattern `{type}_{location}.js` where:
- **type**: `enemies`, `encounters`, `mining`, `ambush`
- **location**: `scrapyard`, `oldbattlefield`, `downtown`, `orbitalstation`, `wasteland`, `undercity`, `industrialzone`, `frozenreach`, `neonstrip`, `deadzone`

Special files: `encounters_home.js`, `mining_asteroidbelt.js`

Each file exports a single `const` array (e.g., `ENEMIES_SCRAPYARD`, `MINING_DEADZONE`).

## How to Run

Open `index.html` in any modern browser. No server, build step, or installation required.

## Key Constants

| Constant | Value | Purpose |
|---|---|---|
| `WAVE_INTERVAL` | 5000ms | Time between enemy waves |
| `WAVE_EXPIRE` | 30000ms | Time to engage before wave expires |
| `ENCOUNTER_CHANCE` | 20% | Chance for trade encounter vs combat |
| `MINING_CHANCE` | 15% | Chance for mining event |
| `AMBUSH_CHANCE` | 10% | Chance for ambush event |

## Game State

All game state lives in a single global `game` object (defined at `index.html:1209`):

```javascript
game.player       // Stats: level, xp, hp, attack, speed, defence, combo, mining, regen, fuel
game.inventory    // Array of item objects
game.equipment    // 9 slots: body, legs, arms, weapon, chip, processor, pilot, drill, implant
game.minerals     // Collected minerals by category
game.storyItems   // Collected story items
game.deaths       // Death counter (persists across runs)
game.activeSlot   // Current save slot (1-3 or null)
```

## Core Functions (index.html)

### Save/Load System
- `buildSaveData()` (:1279) - Serializes game state
- `saveGame()` (:1498) - Writes to localStorage
- `loadGame()` (:1514) - Restores from localStorage
- `loadFromSlot(slotNum)` (:1352) - Loads a specific save slot
- `deleteSlot(slotNum)` (:1475) - Deletes a save slot

### Combat
- `spawnWave()` (:2722) - Main wave spawning logic (routes to combat/encounter/mining/ambush)
- `generateWave()` (:2076) - Creates enemy waves
- `calculateDamage(attack, defence)` (:2817) - Damage formula
- `endBattle(victory)` (:2926) - Handles battle conclusion, drops, XP

### Encounters & Shopping
- `spawnEncounter()` (:2221) - Triggers trade encounters
- `selectEncounterType()` (:2093) - Picks encounter from location pool
- `generateShopItems(encounter)` (:2116) - Populates shop inventory
- `purchaseItem(index)` (:2193) - Handles item purchase

### Mining
- `spawnMiningEvent()` (:2323) - Triggers mining events
- `addMineral(name, category)` (:2492) - Adds mineral to collection
- `endMining(success)` (:2459) - Concludes mining

### Ambush
- `spawnAmbush()` (:2635) - Triggers ambush encounters
- `selectAmbushType()` (:2619) - Picks ambush from location pool
- `evadeAmbush()` (:2696) - Escape logic

### Equipment & Stats
- `recalculateStats()` (:1869) - Recomputes stats from base + equipment
- `onEquipmentChange(slot, itemName)` (:1972) - Handles equip/unequip
- `addItemToInventory(item)` (:1992) - Adds item and auto-saves
- `checkLevelUp()` (:2024) - XP threshold check and stat growth

### UI
- `showPage(pageIndex)` (:1655) - Panel navigation (7 pages)
- `updateStats()` (:1839) - Refreshes stat display
- `updateEquipmentUI()` (:1922) - Refreshes equipment dropdowns
- `updateMiningUI()` (:2515) - Refreshes mining panel
- `updateStorageUI()` (:2553) - Refreshes inventory panel
- `addMessage(text, type)` - Appends to chat log (uses async text animation)

### Initialization
- `init()` (:3084) - Entry point, called on page load (:3131)

## Item Schema (items.js)

```javascript
{
    name: "Item Name [+STAT]",
    type: "body|legs|arms|weapon|chip|processor|pilot|drill|implant",
    desc: "Flavour text",
    image: "images/IMAGE.gif",
    stats: { hp, defence, speed, attack, combo, mining, regen },
    dropRate: 10,         // Relative drop chance (higher = more common)
    droppedBy: [],        // Enemy names that drop this; empty = all enemies
    cost: 10              // XP cost in shops
}
```

## Enemy Schema (enemies_*.js)

```javascript
{
    name: "Enemy Name",
    attack: 8,
    defence: 3,
    hp: 40,
    xp: 5,
    appearance: 10,       // Relative spawn weight
    minSquad: 1,
    maxSquad: 2
}
```

## Save System

- **Storage:** Browser `localStorage`
- **Keys:** `combobreaker_save` (auto-save), `combobreaker_slot_1` through `combobreaker_slot_3`
- **3 manual save slots** plus auto-save
- Saves persist: player stats, inventory, equipment, location, minerals, story items, fuel, deaths

## Locations

10 explorable zones plus 2 special areas:

1. **Scrapyard** (starting location)
2. **Old Battlefield**
3. **Downtown**
4. **Orbital Station**
5. **Wasteland**
6. **Undercity**
7. **Industrial Zone**
8. **Frozen Reach**
9. **Neon Strip**
10. **Dead Zone**
- **Home** - Safe haven (encounters only, no combat)
- **Asteroid Belt** - Mining-only (no combat)

## UI Panels

7 navigable pages:

1. **Stats** - HP/XP bars, stat breakdown, death counter
2. **Installations** - 7 mech equipment slots (body, legs, arms, weapon, chip, processor, drill)
3. **Pilot** - 2 pilot-specific slots (pilot module, implant)
4. **Location** - Map selection and location descriptions
5. **Mining** - Mineral collection display
6. **Storage** - Full inventory list
7. **Store** - Dynamic shop UI (appears during encounters)

## Code Conventions

- **Language:** Vanilla ES6+ JavaScript (arrow functions, template literals, const/let, async/await)
- **Naming:** camelCase for functions/variables, UPPER_SNAKE_CASE for constants and data arrays
- **State:** Single global `game` object holds all mutable state
- **DOM:** Direct `document.getElementById` / `querySelector` manipulation, no virtual DOM
- **Async:** `async/await` with `delay()` helper for text animation effects
- **Error handling:** Try/catch around localStorage operations
- **CSS:** Cyberpunk aesthetic - dark background (#0a0a0f), neon green (#00ff88), monospace font (Courier New), glow text-shadows

## Development Guidelines

- **No build step** - changes are immediately testable by refreshing the browser
- **Test by playing** - no automated test framework exists; verify changes by running the game
- All game logic is inline in `index.html` within a single `<script>` block (lines 1207-3131)
- Data files are loaded as `<script src="...">` tags and expose global `const` arrays
- When adding a new location, create all 4 data files (`enemies_`, `encounters_`, `mining_`, `ambush_`) and register the location in `changeLocation()` and `getEnemies()`/`getEncounters()` switch statements
- When adding items, append to the `ITEMS` array in `items.js` following the existing schema
- The game auto-saves after most state changes (equipment change, item pickup, battle end, mining)

## Browser Requirements

- ES6+ JavaScript support
- localStorage API
- CSS Flexbox
- Async/await
- No mobile-specific layout (designed for desktop)
