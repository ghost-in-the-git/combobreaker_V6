/**
 * SCRAP YARD - ENEMY CONFIGURATION
 *
 * Junked mechs, rogue drones, and scavenger bots prowling the wreckage.
 * Lower-tier enemies, good for early game.
 */

const ENEMIES_SCRAPYARD = [
    {
        name: "T1 Scout",
        attack: 2,
        defence: 0,
        hp: 1,
        xp: 2,
        appearanceRate: 30,
        minLevel: 1,
        squadMin: 1,
        squadMax: 4
    },
    {
        name: "T1 Nano Swarm",
        attack: 1,
        defence: 0,
        hp: 1,
        xp: 1,
        appearanceRate: 3,
        minLevel: 1,
        squadMin: 5,
        squadMax: 10
    },
    {
        name: "T1 Heavy Tank",
        attack: 1,
        defence: 4,
        hp: 10,
        xp: 10,
        appearanceRate: 30,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2
    },
    {
        name: "T1 Enforcer",
        attack: 5,
        defence: 2,
        hp: 5,
        xp: 5,
        appearanceRate: 30,
        minLevel: 1,
        squadMin: 1,
        squadMax: 3
    },
    {
        name: "Scrap Drone",
        attack: 3,
        defence: 1,
        hp: 3,
        xp: 3,
        appearanceRate: 25,
        minLevel: 1,
        squadMin: 2,
        squadMax: 5
    },
    {
        name: "Junkyard Golem",
        attack: 6,
        defence: 6,
        hp: 20,
        xp: 15,
        appearanceRate: 8,
        minLevel: 1,
        squadMin: 1,
        squadMax: 2
    },
    {
        name: "T1 Destroyer",
        attack: 10,
        defence: 10,
        hp: 100,
        xp: 100,
        appearanceRate: 3,
        minLevel: 1,
        squadMin: 1,
        squadMax: 1
    }
];
