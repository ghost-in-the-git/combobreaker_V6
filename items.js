/**
 * ITEMS CONFIGURATION
 *
 * Edit this file to add, remove, or modify items.
 *
 * Each item has:
 * - name: Display name
 * - type: "body", "legs", "arms", "weapon", "chip", "processor", "pilot", "drill", or "implant"
 * - desc: Flavour text shown when installed
 * - image: Image path for the item icon
 * - stats: Object with stat bonuses { hp, defence, speed, attack, combo }
 * - dropRate: Relative chance to drop (higher = more common)
 * - droppedBy: Array of enemy names that can drop this item (empty = all enemies)
 * - cost: XP cost to purchase from shops
 */

const ITEMS = [
    // ==================== BODY (HP & Defence) ====================
    {
        name: "Low-Grade Chassis [+10 HP][+1 DEF]",
        type: "body",
        desc: "Scrap-welded plating bolted to the frame. Barely holds together, but it's better than nothing.",
        image: "images/IMAGE.gif",
        stats: { hp: 10, defence: 1 },
        dropRate: 10,
        droppedBy: [],
        cost: 10
    },
    {
        name: "Standard Chassis [+20 HP][+2 DEF]",
        type: "body",
        desc: "Mass-produced military surplus. Reliable, unglamorous, and easy to replace.",
        image: "images/IMAGE.gif",
        stats: { hp: 20, defence: 2 },
        dropRate: 10,
        droppedBy: [],
        cost: 20
    },
    {
        name: "Advanced Chassis [+30 HP][+3 DEF]",
        type: "body",
        desc: "Layered composite armor with integrated shock dampeners. A solid mid-range frame.",
        image: "images/IMAGE.gif",
        stats: { hp: 30, defence: 3 },
        dropRate: 10,
        droppedBy: [],
        cost: 35
    },
    {
        name: "Military Chassis [+40 HP][+4 DEF]",
        type: "body",
        desc: "Hardened battlefield plating stripped from a decommissioned war mech. Still has scorch marks.",
        image: "images/IMAGE.gif",
        stats: { hp: 40, defence: 4 },
        dropRate: 10,
        droppedBy: [],
        cost: 50
    },
    {
        name: "Old Breaker Chassis [+50 HP][+5 DEF]",
        type: "body",
        desc: "An early Breaker-class frame. The alloy is outdated but the engineering is sound.",
        image: "images/IMAGE.gif",
        stats: { hp: 50, defence: 5 },
        dropRate: 10,
        droppedBy: [],
        cost: 70
    },
    {
        name: "Breaker Chassis [+60 HP][+6 DEF]",
        type: "body",
        desc: "Standard-issue Breaker frame. Balanced protection across all threat profiles.",
        image: "images/IMAGE.gif",
        stats: { hp: 60, defence: 6 },
        dropRate: 10,
        droppedBy: [],
        cost: 90
    },
    {
        name: "EVO1 Breaker Chassis [+70 HP][+7 DEF]",
        type: "body",
        desc: "First evolution of the Breaker line. Reinforced joints and reactive plating layers.",
        image: "images/IMAGE.gif",
        stats: { hp: 70, defence: 7 },
        dropRate: 10,
        droppedBy: [],
        cost: 115
    },
    {
        name: "EVO2 Breaker Chassis [+80 HP][+8 DEF]",
        type: "body",
        desc: "Second evolution. Self-sealing armor weave that repairs minor punctures between engagements.",
        image: "images/IMAGE.gif",
        stats: { hp: 80, defence: 8 },
        dropRate: 10,
        droppedBy: [],
        cost: 140
    },
    {
        name: "EVO3 Breaker Chassis [+90 HP][+9 DEF]",
        type: "body",
        desc: "Third evolution. Nano-lattice structure distributes impact force across the entire frame.",
        image: "images/IMAGE.gif",
        stats: { hp: 10, defence: 1 },
        dropRate: 10,
        droppedBy: [],
        cost: 170
    },
    {
        name: "EVO4 Breaker Chassis [+100 HP][+10 DEF]",
        type: "body",
        desc: "Final evolution. Experimental alloy that absorbs kinetic energy and converts it to heat shielding.",
        image: "images/IMAGE.gif",
        stats: { hp: 10, defence: 1 },
        dropRate: 10,
        droppedBy: [],
        cost: 200
    },

     // ==================== LEGS (Speed) ====================
    {
        name: "Standard Servos [+2 SPD]",
        type: "legs",
        desc: "Basic hydraulic legs. They move, they stop. Not much else to say.",
        image: "images/IMAGE.gif",
        stats: { speed: 2 },
        dropRate: 60,
        droppedBy: [],
        cost: 8
    },
    {
        name: "Enhanced Servos [+4 SPD]",
        type: "legs",
        desc: "Upgraded actuators with smoother response curves. Noticeably quicker on the turn.",
        image: "images/IMAGE.gif",
        stats: { speed: 4 },
        dropRate: 50,
        droppedBy: [],
        cost: 18
    },
    {
        name: "Quick Striders [+6 SPD]",
        type: "legs",
        desc: "Lightweight alloy legs built for speed. Sacrifices nothing for raw mobility.",
        image: "images/IMAGE.gif",
        stats: { speed: 6 },
        dropRate: 40,
        droppedBy: [],
        cost: 30
    },
    {
        name: "Hydraulic Boosters [+8 SPD]",
        type: "legs",
        desc: "Pressurized boost chambers fire on each stride. The ground shakes when these move.",
        image: "images/IMAGE.gif",
        stats: { speed: 8 },
        dropRate: 30,
        droppedBy: ["Droid Scout", "Droid Enforcer"],
        cost: 45
    },
    {
        name: "Reflex Actuators [+10 SPD]",
        type: "legs",
        desc: "Neural-linked servo motors that react before the pilot's conscious thought catches up.",
        image: "images/IMAGE.gif",
        stats: { speed: 10 },
        dropRate: 22,
        droppedBy: ["Droid Scout", "Droid Enforcer", "Droid Sentinel"],
        cost: 60
    },
    {
        name: "Kinetic Stabilizers [+12 SPD]",
        type: "legs",
        desc: "Gyroscopic stabilization lets these legs maintain full speed on any terrain.",
        image: "images/IMAGE.gif",
        stats: { speed: 12 },
        dropRate: 16,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 80
    },
    {
        name: "Phase Shift Legs [+14 SPD]",
        type: "legs",
        desc: "Experimental legs that briefly phase through obstacles during high-speed maneuvers.",
        image: "images/IMAGE.gif",
        stats: { speed: 14 },
        dropRate: 12,
        droppedBy: ["Droid Sentinel"],
        cost: 100
    },
    {
        name: "Quantum Thrusters [+16 SPD]",
        type: "legs",
        desc: "Micro-thrusters fire in quantum bursts, propelling the mech faster than conventional physics allows.",
        image: "images/IMAGE.gif",
        stats: { speed: 16 },
        dropRate: 8,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"],
        cost: 125
    },
    {
        name: "Temporal Drives [+18 SPD]",
        type: "legs",
        desc: "Time-dilated movement systems. To observers, the mech appears to skip frames of reality.",
        image: "images/IMAGE.gif",
        stats: { speed: 18 },
        dropRate: 5,
        droppedBy: ["Droid Destroyer"],
        cost: 150
    },
    {
        name: "Singularity Runners [+20 SPD]",
        type: "legs",
        desc: "Gravity-warping drives that fold space around each stride. The fastest legs ever built.",
        image: "images/IMAGE.gif",
        stats: { speed: 20 },
        dropRate: 3,
        droppedBy: ["Droid Destroyer"],
        cost: 180
    },

    // ==================== ARMS (Attack or Defence) ====================
    {
        name: "Standard Manipulators [+2 ATK]",
        type: "arms",
        desc: "Basic mechanical arms with reinforced knuckle plates. Gets the job done.",
        image: "images/IMAGE.gif",
        stats: { attack: 2 },
        dropRate: 55,
        droppedBy: [],
        cost: 10
    },
    {
        name: "Shield Bracers [+2 DEF]",
        type: "arms",
        desc: "Forearm-mounted deflection plates. Angled to redirect incoming fire.",
        image: "images/IMAGE.gif",
        stats: { defence: 2 },
        dropRate: 55,
        droppedBy: [],
        cost: 10
    },
    {
        name: "Power Gauntlets [+4 ATK]",
        type: "arms",
        desc: "Pneumatic fists that deliver bone-crushing force with every swing.",
        image: "images/IMAGE.gif",
        stats: { attack: 4 },
        dropRate: 40,
        droppedBy: ["Droid Scout", "Droid Enforcer"],
        cost: 25
    },
    {
        name: "Barrier Arms [+4 DEF]",
        type: "arms",
        desc: "Layered energy barriers project from the forearms, absorbing ballistic impacts.",
        image: "images/IMAGE.gif",
        stats: { defence: 4 },
        dropRate: 40,
        droppedBy: ["Droid Scout", "Droid Enforcer"],
        cost: 25
    },
    {
        name: "Crusher Claws [+6 ATK]",
        type: "arms",
        desc: "Hydraulic claws designed to rip through armored plating like paper.",
        image: "images/IMAGE.gif",
        stats: { attack: 6 },
        dropRate: 26,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 45
    },
    {
        name: "Fortress Gauntlets [+6 DEF]",
        type: "arms",
        desc: "Massive tower-shield arms. Slow to swing, but nothing gets through.",
        image: "images/IMAGE.gif",
        stats: { defence: 6 },
        dropRate: 26,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 45
    },
    {
        name: "Ravager Arms [+8 ATK]",
        type: "arms",
        desc: "Serrated blade-arms that spin at high RPM. Designed for close-quarters mech dismantling.",
        image: "images/IMAGE.gif",
        stats: { attack: 8 },
        dropRate: 14,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"],
        cost: 70
    },
    {
        name: "Aegis Bracers [+8 DEF]",
        type: "arms",
        desc: "Multi-layered hardlight shields project in overlapping arcs. Military-grade protection.",
        image: "images/IMAGE.gif",
        stats: { defence: 8 },
        dropRate: 14,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"],
        cost: 70
    },
    {
        name: "Decimator Arms [+10 ATK]",
        type: "arms",
        desc: "Overengineered siege arms. Each strike lands with the force of a demolition charge.",
        image: "images/IMAGE.gif",
        stats: { attack: 10 },
        dropRate: 6,
        droppedBy: ["Droid Destroyer"],
        cost: 100
    },
    {
        name: "Citadel Arms [+10 DEF]",
        type: "arms",
        desc: "Walking fortress arms with interlocking shield plates. Built to outlast anything.",
        image: "images/IMAGE.gif",
        stats: { defence: 10 },
        dropRate: 6,
        droppedBy: ["Droid Destroyer"],
        cost: 100
    },

    // ==================== WEAPON (Attack, Combo, or Defence) ====================
    {
        name: "Pulse Pistol [+2 ATK]",
        type: "weapon",
        desc: "A compact sidearm that fires concentrated energy pulses. Reliable, if underwhelming.",
        image: "images/IMAGE.gif",
        stats: { attack: 2 },
        dropRate: 55,
        droppedBy: [],
        cost: 10
    },
    {
        name: "Energy Shield [+2 DEF]",
        type: "weapon",
        desc: "A handheld energy projector that creates a temporary defensive barrier.",
        image: "images/IMAGE.gif",
        stats: { defence: 2 },
        dropRate: 55,
        droppedBy: [],
        cost: 10
    },
    {
        name: "Chain Blade [+3 ATK][+2 COMBO]",
        type: "weapon",
        desc: "A motorized blade with chain-linked teeth. Rips through armor and chains hits naturally.",
        image: "images/IMAGE.gif",
        stats: { attack: 3, combo: 2 },
        dropRate: 40,
        droppedBy: ["Droid Scout"],
        cost: 25
    },
    {
        name: "Plasma Rifle [+5 ATK]",
        type: "weapon",
        desc: "Superheated plasma rounds that melt through plating. Standard issue for serious engagements.",
        image: "images/IMAGE.gif",
        stats: { attack: 5 },
        dropRate: 30,
        droppedBy: ["Droid Scout", "Droid Enforcer"],
        cost: 35
    },
    {
        name: "Combo Striker [+4 COMBO]",
        type: "weapon",
        desc: "A rapid-cycling weapon system optimized for sustained hit chains. Speed over power.",
        image: "images/IMAGE.gif",
        stats: { combo: 4 },
        dropRate: 26,
        droppedBy: ["Droid Scout", "Droid Enforcer"],
        cost: 30
    },
    {
        name: "Fortress Module [+5 DEF]",
        type: "weapon",
        desc: "A deployable defense module that hardens the mech's outer shell on impact detection.",
        image: "images/IMAGE.gif",
        stats: { defence: 5 },
        dropRate: 22,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 40
    },
    {
        name: "Railgun [+8 ATK]",
        type: "weapon",
        desc: "Electromagnetic acceleration drives a tungsten slug at hypersonic velocity. One shot, one kill.",
        image: "images/IMAGE.gif",
        stats: { attack: 8 },
        dropRate: 14,
        droppedBy: ["Droid Sentinel"],
        cost: 65
    },
    {
        name: "Breaker Blade [+10 ATK][+6 COMBO]",
        type: "weapon",
        desc: "The signature weapon of the Breaker line. Vibro-edged and perfectly balanced for combo strikes.",
        image: "images/IMAGE.gif",
        stats: { attack: 10, combo: 6 },
        dropRate: 10,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"],
        cost: 100
    },
    {
        name: "Annihilator Cannon [+12 ATK]",
        type: "weapon",
        desc: "A shoulder-mounted siege cannon. Overkill for most targets, perfect for the rest.",
        image: "images/IMAGE.gif",
        stats: { attack: 12 },
        dropRate: 6,
        droppedBy: ["Droid Destroyer"],
        cost: 120
    },
    {
        name: "Omega Rupture Cannon [+14 ATK][+8 COMBO]",
        type: "weapon",
        desc: "Prototype weapon that fires cascading energy bursts. Each impact destabilizes the target for the next.",
        image: "images/IMAGE.gif",
        stats: { attack: 14, combo: 8 },
        dropRate: 3,
        droppedBy: ["Droid Destroyer"],
        cost: 175
    },

    // ==================== SYSTEMS CHIP (Any stat) ====================
    {
        name: "Health Booster Chip I [+10 HP]",
        type: "chip",
        desc: "Overclocks the mech's structural integrity subroutines. Minor but measurable improvement.",
        image: "images/IMAGE.gif",
        stats: { hp: 10 },
        dropRate: 45,
        droppedBy: [],
        cost: 8
    },
    {
        name: "Health Booster Chip II [+20 HP]",
        type: "chip",
        desc: "Advanced integrity algorithms redistribute stress loads in real time.",
        image: "images/IMAGE.gif",
        stats: { hp: 20 },
        dropRate: 18,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 20
    },
    {
        name: "Speed Processor I [+2 SPD]",
        type: "chip",
        desc: "A reflex co-processor that shaves milliseconds off every motor command.",
        image: "images/IMAGE.gif",
        stats: { speed: 2 },
        dropRate: 44,
        droppedBy: [],
        cost: 8
    },
    {
        name: "Speed Processor II [+4 SPD]",
        type: "chip",
        desc: "Predictive motion algorithms that pre-calculate movement paths before the pilot decides.",
        image: "images/IMAGE.gif",
        stats: { speed: 4 },
        dropRate: 17,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 20
    },
    {
        name: "Attack Subroutine I [+2 ATK]",
        type: "chip",
        desc: "Combat targeting firmware that identifies weak points in enemy armor plating.",
        image: "images/IMAGE.gif",
        stats: { attack: 2 },
        dropRate: 43,
        droppedBy: [],
        cost: 10
    },
    {
        name: "Attack Subroutine II [+4 ATK]",
        type: "chip",
        desc: "Military-grade targeting AI. Calculates optimal strike vectors in microseconds.",
        image: "images/IMAGE.gif",
        stats: { attack: 4 },
        dropRate: 16,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 25
    },
    {
        name: "Combo Algorithm I [+4 COMBO]",
        type: "chip",
        desc: "Pattern recognition software that chains attacks into fluid sequences.",
        image: "images/IMAGE.gif",
        stats: { combo: 4 },
        dropRate: 42,
        droppedBy: [],
        cost: 15
    },
    {
        name: "Combo Algorithm II [+8 COMBO]",
        type: "chip",
        desc: "Deep-learning combat AI that adapts combo patterns to each enemy's defensive rhythm.",
        image: "images/IMAGE.gif",
        stats: { combo: 8 },
        dropRate: 15,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"],
        cost: 40
    },
    {
        name: "Defence Matrix I [+2 DEF]",
        type: "chip",
        desc: "Reactive shielding firmware that pre-positions armor plates toward incoming threats.",
        image: "images/IMAGE.gif",
        stats: { defence: 2 },
        dropRate: 41,
        droppedBy: [],
        cost: 10
    },
    {
        name: "Defence Matrix II [+4 DEF]",
        type: "chip",
        desc: "Predictive defense AI that anticipates attack vectors and hardens armor before impact.",
        image: "images/IMAGE.gif",
        stats: { defence: 4 },
        dropRate: 14,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"],
        cost: 25
    },

    // ==================== PROCESSOR (XP Bonus) ====================
    {
        name: "Basic Data Processor [+1 XP]",
        type: "processor",
        desc: "A salvaged co-processor that logs combat data for marginal experience gains.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 15
    },
    {
        name: "Enhanced Data Processor [+2 XP]",
        type: "processor",
        desc: "Upgraded firmware extracts more tactical insight from every engagement.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 2 },
        dropRate: 35,
        droppedBy: [],
        cost: 35
    },
    {
        name: "Combat Analyzer [+3 XP]",
        type: "processor",
        desc: "Real-time battle analysis that breaks down enemy patterns into actionable data.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 3 },
        dropRate: 22,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 60
    },
    {
        name: "Tactical Neural Net [+4 XP]",
        type: "processor",
        desc: "A neural network that simulates thousands of combat scenarios from a single encounter.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 4 },
        dropRate: 14,
        droppedBy: ["Droid Sentinel"],
        cost: 90
    },
    {
        name: "Quantum Learning Core [+5 XP]",
        type: "processor",
        desc: "Quantum-state processor that learns across parallel probability branches simultaneously.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 5 },
        dropRate: 8,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"],
        cost: 130
    },
    {
        name: "Omega Experience Engine [+7 XP]",
        type: "processor",
        desc: "Prototype engine that rewrites the mech's combat doctrine in real time. Every kill teaches volumes.",
        image: "images/IMAGE.gif",
        stats: { xpBonus: 7 },
        dropRate: 3,
        droppedBy: ["Droid Destroyer"],
        cost: 200
    },

    // ==================== PILOT (All Stats) ====================
    {
        name: "Rookie Pilot [+1 ALL]",
        type: "pilot",
        desc: "A green recruit fresh from the simulator. Eager, clumsy, but better than an empty cockpit.",
        image: "images/IMAGE.gif",
        stats: { hp: 1, attack: 1, speed: 1, defence: 1, combo: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 20
    },
    {
        name: "Trained Pilot [+2 ALL]",
        type: "pilot",
        desc: "A field-tested operator with enough scars to know when to push and when to pull back.",
        image: "images/IMAGE.gif",
        stats: { hp: 2, attack: 2, speed: 2, defence: 2, combo: 2 },
        dropRate: 35,
        droppedBy: [],
        cost: 45
    },
    {
        name: "Veteran Pilot [+3 ALL]",
        type: "pilot",
        desc: "Hundreds of sorties logged. Reads the battlefield like a book and moves before the enemy thinks.",
        image: "images/IMAGE.gif",
        stats: { hp: 3, attack: 3, speed: 3, defence: 3, combo: 3 },
        dropRate: 22,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 75
    },
    {
        name: "Elite Pilot [+4 ALL]",
        type: "pilot",
        desc: "Top 1% of mech operators. Neural sync rate is off the charts. The mech feels like a second skin.",
        image: "images/IMAGE.gif",
        stats: { hp: 4, attack: 4, speed: 4, defence: 4, combo: 4 },
        dropRate: 14,
        droppedBy: ["Droid Sentinel"],
        cost: 110
    },
    {
        name: "Ace Pilot [+5 ALL]",
        type: "pilot",
        desc: "A living legend on the battlefield. Enemies break formation at the sight of this callsign.",
        image: "images/IMAGE.gif",
        stats: { hp: 5, attack: 5, speed: 5, defence: 5, combo: 5 },
        dropRate: 8,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"],
        cost: 160
    },
    {
        name: "Ghost Pilot [+7 ALL]",
        type: "pilot",
        desc: "Officially listed as KIA. Unofficially, the deadliest operator ever to interface with a Breaker frame.",
        image: "images/IMAGE.gif",
        stats: { hp: 7, attack: 7, speed: 7, defence: 7, combo: 7 },
        dropRate: 3,
        droppedBy: ["Droid Destroyer"],
        cost: 250
    },

    // ==================== MINING DRILL (Mining) ====================
    {
        name: "Salvage Pick [+1 MINING]",
        type: "drill",
        desc: "A repurposed construction tool. Crude but functional for cracking open mineral deposits.",
        image: "images/IMAGE.gif",
        stats: { mining: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 15
    },
    {
        name: "Pneumatic Drill [+2 MINING]",
        type: "drill",
        desc: "Compressed-air powered bore head. Punches through soft rock and corroded metal with ease.",
        image: "images/IMAGE.gif",
        stats: { mining: 2 },
        dropRate: 35,
        droppedBy: [],
        cost: 40
    },
    {
        name: "Diamond-Tip Auger [+4 MINING]",
        type: "drill",
        desc: "Industrial-grade diamond cutting teeth mounted on a reinforced shaft. Eats through stone like butter.",
        image: "images/IMAGE.gif",
        stats: { mining: 4 },
        dropRate: 22,
        droppedBy: ["Furnace Guardian", "Reactor Sentinel"],
        cost: 80
    },
    {
        name: "Plasma Bore [+7 MINING]",
        type: "drill",
        desc: "Superheated plasma stream focused into a cutting beam. Melts through anything short of void-steel.",
        image: "images/IMAGE.gif",
        stats: { mining: 7 },
        dropRate: 14,
        droppedBy: ["Reactor Sentinel", "Smelter Titan"],
        cost: 130
    },
    {
        name: "Tectonic Shatterer [+11 MINING]",
        type: "drill",
        desc: "Generates focused seismic pulses that fracture entire mineral veins in a single burst.",
        image: "images/IMAGE.gif",
        stats: { mining: 11 },
        dropRate: 8,
        droppedBy: ["Cryo Warlord", "Avalanche Colossus"],
        cost: 200
    },
    {
        name: "Quantum Excavator [+16 MINING]",
        type: "drill",
        desc: "Phase-shifts through solid matter to extract minerals at the atomic level. The pinnacle of extraction tech.",
        image: "images/IMAGE.gif",
        stats: { mining: 16 },
        dropRate: 3,
        droppedBy: ["Abomination Core"],
        cost: 320
    },

    // ==================== IMPLANT (Regen) ====================
    {
        name: "Salvaged Repair Node [+1 REGEN]",
        type: "implant",
        desc: "A crude self-repair module pulled from a wrecked maintenance drone. Slow, but it works.",
        image: "images/IMAGE.gif",
        stats: { regen: 1 },
        dropRate: 50,
        droppedBy: [],
        cost: 15
    },
    {
        name: "Basic Nano Injector [+2 REGEN]",
        type: "implant",
        desc: "A subdermal injector that releases repair nanites into the mech's structural lattice.",
        image: "images/IMAGE.gif",
        stats: { regen: 2 },
        dropRate: 40,
        droppedBy: [],
        cost: 30
    },
    {
        name: "Tissue Welder Implant [+3 REGEN]",
        type: "implant",
        desc: "Micro-welders embedded in the frame that continuously seal cracks and fractures.",
        image: "images/IMAGE.gif",
        stats: { regen: 3 },
        dropRate: 32,
        droppedBy: [],
        cost: 50
    },
    {
        name: "Regenerative Mesh [+4 REGEN]",
        type: "implant",
        desc: "A woven lattice of self-healing polymers that knit armor back together between impacts.",
        image: "images/IMAGE.gif",
        stats: { regen: 4 },
        dropRate: 25,
        droppedBy: ["Droid Scout", "Droid Enforcer"],
        cost: 75
    },
    {
        name: "Bio-Repair Matrix [+5 REGEN]",
        type: "implant",
        desc: "Organic tissue grafted into the mech's hull. It grows back. Don't think about it too hard.",
        image: "images/IMAGE.gif",
        stats: { regen: 5 },
        dropRate: 20,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 100
    },
    {
        name: "Nano Reconstruction Array [+6 REGEN]",
        type: "implant",
        desc: "Swarms of repair nanites that rebuild damaged sections at the molecular level.",
        image: "images/IMAGE.gif",
        stats: { regen: 6 },
        dropRate: 16,
        droppedBy: ["Droid Enforcer", "Droid Sentinel"],
        cost: 130
    },
    {
        name: "Adaptive Hull Implant [+8 REGEN]",
        type: "implant",
        desc: "Memory-metal plating that remembers its original shape and reforms after taking damage.",
        image: "images/IMAGE.gif",
        stats: { regen: 8 },
        dropRate: 12,
        droppedBy: ["Droid Sentinel"],
        cost: 170
    },
    {
        name: "Phoenix Core Module [+10 REGEN]",
        type: "implant",
        desc: "A thermite-laced repair core that burns away damaged material and regrows it from stored templates.",
        image: "images/IMAGE.gif",
        stats: { regen: 10 },
        dropRate: 8,
        droppedBy: ["Droid Sentinel", "Droid Destroyer"],
        cost: 220
    },
    {
        name: "Lazarus Engine [+13 REGEN]",
        type: "implant",
        desc: "Experimental resurrection tech. The mech's frame heals so fast it's practically unkillable. Practically.",
        image: "images/IMAGE.gif",
        stats: { regen: 13 },
        dropRate: 5,
        droppedBy: ["Droid Destroyer"],
        cost: 280
    },
    {
        name: "Omega Regeneration Core [+16 REGEN]",
        type: "implant",
        desc: "Prototype self-repair system that operates at the quantum level. Damage is undone before it fully registers.",
        image: "images/IMAGE.gif",
        stats: { regen: 16 },
        dropRate: 3,
        droppedBy: ["Droid Destroyer"],
        cost: 350
    }

];

// Item type labels for UI
const ITEM_TYPES = {
    body: "BODY READY FOR INSTALLATION",
    legs: "LEGS READY FOR INSTALLATION",
    arms: "ARMS READY FOR INSTALLATION",
    weapon: "WEAPON READY FOR INSTALLATION",
    chip: "CHIP READY FOR INSTALLATION",
    processor: "PROCESSOR READY FOR INSTALLATION",
    pilot: "PILOT READY FOR INSTALLATION",
    drill: "MINING DRILL READY FOR INSTALLATION",
    implant: "IMPLANT READY FOR INSTALLATION"
};
