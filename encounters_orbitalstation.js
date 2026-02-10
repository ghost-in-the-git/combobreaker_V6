/**
 * ORBITAL STATION - ENCOUNTER CONFIGURATION
 *
 * Zero-g traders, station quartermasters, and smugglers
 * docked in the station's commercial ring.
 */

const ENCOUNTERS_ORBITALSTATION = [
    {
        name: "[COMMON] Station Quartermaster",
        type: "shop",
        description: "A logistics officer flags your mech from the station's supply bay. Surplus military stock available.",
        engageText: "The quartermaster checks a manifest. 'Standard rates, standard gear. Nothing fancy, nothing broken.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Zero-G Peddler",
        type: "shop",
        description: "A small craft is magnetically clamped to the station hull. A trader waves from the airlock.",
        engageText: "The peddler floats out with a crate. 'Catch! Everything's weightless up here, including the prices.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Docking Ring Vendor",
        type: "shop",
        description: "An automated kiosk at the docking ring displays rotating inventory on a holographic shelf.",
        engageText: "The kiosk chimes. 'Welcome, docking permit verified. Browse at your leisure, pilot.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Void Smuggler",
        type: "shop",
        description: "A blacked-out shuttle with scrambled transponders drifts alongside. A hailing frequency opens.",
        engageText: "A masked figure whispers. 'I move things between stations that stations don't want moved. Interested?'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    }
];
