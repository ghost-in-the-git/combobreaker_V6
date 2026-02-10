/**
 * SCRAP YARD - ENCOUNTER CONFIGURATION
 *
 * Junkers, scavengers, and makeshift dealers picking through the wreckage.
 */

const ENCOUNTERS_SCRAPYARD = [
    {
        name: "[COMMON] Mech Junker",
        type: "shop",
        description: "A wandering Junker's vessel has appeared on radar. They're broadcasting a trade signal.",
        engageText: "The Junker greets your mech as it arrives at the hangar bay door. They motion to a shelf of salvaged mech parts.",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Scrap Dealer",
        type: "shop",
        description: "A Scrap Dealer's cargo ship is passing through. Their comms crackle with offers of rare components.",
        engageText: "The Scrap Dealer eyes your mech approvingly. 'Got some quality salvage here, pilot. Take a look.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Field Mechanic",
        type: "shop",
        description: "A lone field mechanic truck sits next to a decommissioned mech. A field mechanic is offering tune-ups and spare parts.",
        engageText: "A grease-stained tech waves you in. 'I can patch armor, swap actuators, or sell you something that won't explode. Probably.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Derelict Vending Array",
        type: "shop",
        description: "A derelict station's vending array still has power. The interface flickers—prices fluctuate wildly.",
        engageText: "Your mech taps the terminal. Ancient menus scroll past. A slot clunks open with something inside.",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    }
];
