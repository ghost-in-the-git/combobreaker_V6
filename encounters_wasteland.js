/**
 * WASTELAND - ENCOUNTER CONFIGURATION
 *
 * Nomad traders, rad-shielded caravans, and scavenger camps
 * scattered across the scorched badlands.
 */

const ENCOUNTERS_WASTELAND = [
    {
        name: "[COMMON] Nomad Trader",
        type: "shop",
        description: "A dust-caked nomad convoy rolls into sensor range. They flash trade beacons from atop their rigs.",
        engageText: "A weathered nomad tips their goggles. 'Water's scarce, parts aren't. What do you need, traveler?'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Rad-Shielded Caravan",
        type: "shop",
        description: "A lead-lined hauler convoy creeps across the dunes. Their geiger counters click rhythmically.",
        engageText: "The caravan master opens a shielded crate. 'Clean parts, tested and decontaminated. Mostly.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Scavenger Camp",
        type: "shop",
        description: "A makeshift camp sits in the shadow of a wrecked dropship. Salvaged goods are laid out on tarps.",
        engageText: "A scavenger beckons from behind a pile of parts. 'Dug these up this morning. Still warm.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Buried Supply Cache",
        type: "shop",
        description: "Your sensors detect a pre-war supply cache buried beneath the sand. The seal is still intact.",
        engageText: "The cache hisses open. Inside, vacuum-sealed components gleam under your mech's floodlights.",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    }
];
