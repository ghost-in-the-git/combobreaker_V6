/**
 * OLD BATTLEFIELD - ENCOUNTER CONFIGURATION
 *
 * Military supply caches, salvage auctions, and pilgrim caravans
 * moving through the scarred terrain.
 */

const ENCOUNTERS_OLDBATTLEFIELD = [
    {
        name: "[COMMON] Salvage Auction Pod",
        type: "shop",
        description: "A drifting auction pod broadcasts rotating lots of recovered mech gear—first come, first served.",
        engageText: "A synthetic voice lists items at high speed. A timer starts. 'BID CONFIRMED' flashes across your HUD.",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Corporate Supply Cache",
        type: "shop",
        description: "A corporate resupply buoy is active in this sector. Access requires credits and a clean transaction.",
        engageText: "The kiosk chirps politely. 'Welcome, valued contractor. Please select from approved inventory.'",
        appearanceRate: 15,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Pilgrim Parts Caravan",
        type: "shop",
        description: "A convoy of civilian haulers moves in formation, offering parts in exchange for fuel, ammo, or coin.",
        engageText: "A tired caravan captain nods. 'We don't fight, we survive. Trade fair and we'll both make it home.'",
        appearanceRate: 20,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    },
    {
        name: "[COMMON] Experimental R&D Vendor",
        type: "shop",
        description: "A research craft requests a brief rendezvous. Prototype components available for combat testing.",
        engageText: "A scientist peers at your mech telemetry. 'Sign the waiver. If it glows, that's normal. Mostly.'",
        appearanceRate: 10,
        minLevel: 1,
        itemSlot1: [],
        itemSlot2: [],
        itemSlot3: []
    }
];
