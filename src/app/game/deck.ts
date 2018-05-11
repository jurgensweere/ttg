export const PLAYER_DECK = [
    {
        name: 'Homeworld',
        type: 'planet',
        slots: ['manpower', 'utility'],
        area: 'start',
        playerCount: 1,
        hand: true,
        start: true,
        renown: 1
    }, {
        name: 'Frontier Colony',
        type: 'colony',
        colonyType: 'manpower',
        output: {
            manpower: 1
        },
        cost: 2,
        hand: true,
        start: true
    }, {
        name: 'Frontier Colony',
        type: 'colony',
        colonyType: 'manpower',
        output: {
            manpower: 1
        },
        cost: 2,
        hand: true
    }, {
        name: 'Trade Hub',
        type: 'colony',
        colonyType: 'utility',
        input: {
            production: 1
        },
        output: {
            card: 2
        },
        cost: 4,
        hand: true
    }, {
        name: 'Nightlife Colony',
        type: 'colony',
        colonyType: 'manpower',
        output: {
            manpower: 1,
            card: 1
        },
        cost: 4,
        renown: 1
    }, {
        name: 'Mining Operation',
        type: 'colony',
        colonyType: 'production',
        input: {
            manpower: 1
        },
        output: {
            production: 1
        },
        cost: 2,
        hand: true
    }, {
        name: 'Slum Colony',
        type: 'colony',
        colonyType: 'manpower',
        output: {
            manpower: 2
        },
        cost: 3,
        renown: -2
    }, {
        name: 'Drone Colony',
        type: 'colony',
        colonyType: 'utility',
        output: {
            manpower: 1
        },
        cost: 2
    }, {
        name: 'Deepcore Mines',
        type: 'colony',
        colonyType: 'production',
        input: {
            manpower: 1
        },
        output: {
            production: 3
        },
        cost: 8,
        renown: 2
    }, {
        name: 'Star Cruiser',
        type: 'ship',
        input: {
            manpower: 2
        },
        output: {
            card: 2
        },
        cost: 3
    }, {
        name: 'Genetics Lab',
        type: 'colony',
        colonyType: 'utility',
        input: {
            science: 1
        },
        output: {
            renown: 2
        },
        cost: 4,
        renown: 1
    }, {
        name: 'Continental Mining',
        type: 'colony',
        colonyType: 'production',
        input: {
            manpower: 1
        },
        output: {
            production: 2
        },
        cost: 5,
        renown: 1
    }, {
        name: 'A.I. Core',
        type: 'colony',
        colonyType: 'utility',
        input: {
            production: 1
        },
        output: {
            science: 1
        },
        cost: 4
    }, {
        name: 'Robot Factory',
        type: 'colony',
        colonyType: 'utility',
        output: {
            manpower: 2
        },
        cost: 5,
        renown: 1
    }, {
        name: 'Automated Mines',
        type: 'colony',
        colonyType: 'production',
        output: {
            production: 2
        },
        cost: 7,
        renown: 1
    }, {
        name: 'Colony Ship',
        type: 'ship',
        output: {
            manpower: 1
        },
        cost: 3
    }, {
        name: 'Industry Zone',
        type: 'colony',
        colonyType: 'utility',
        input: {
            manpower: 2
        },
        output: {
            production: 2
        },
        cost: 5,
        renown: 1
    }, {
        name: 'Trade Fleet',
        type: 'ship',
        input: {
            production: 1
        },
        output: {
            card: 2
        },
        cost: 4
    }, {
        name: 'Black Market',
        type: 'colony',
        colonyType: 'utility',
        input: {
            production: 1
        },
        output: {
            card: 3
        },
        cost: 4,
        renown: -2
    }, {
        name: 'Data Trade',
        type: 'colony',
        colonyType: 'utility',
        input: {
            science: 1
        },
        output: {
            card: 2
        },
        cost: 4
    }, {
        name: 'Hive Colony',
        type: 'colony',
        colonyType: 'manpower',
        output: {
            manpower: 3
        },
        cost: 5,
        renown: -4
    }, {
        name: 'Shoddy Camp',
        type: 'colony',
        colonyType: 'manpower',
        output: {
            manpower: 1
        },
        cost: 0,
        renown: -1
    }, {
        name: 'Metropolis',
        type: 'colony',
        colonyType: 'manpower',
        output: {
            manpower: 3
        },
        cost: 8,
        renown: 4
    }, {
        name: 'Stellar Engineers',
        type: 'ship',
        input: {
            production: 2
        },
        output: {
            renown: 2
        },
        cost: 4
    }, {
        name: 'Space Opera',
        type: 'colony',
        colonyType: 'utility',
        input: {
            manpower: 2
        },
        output: {
            renown: 2
        },
        cost: 4
    }, {
        name: 'Logistics Hub',
        type: 'colony',
        colonyType: 'utility',
        input: {
            production: 2
        },
        output: {
            renown: 3
        },
        cost: 4
    }, {
        name: 'Nature Reserve',
        type: 'colony',
        colonyType: 'manpower',
        cost: 4,
        renown: 6
    }, {
        name: 'Penal Mine',
        type: 'colony',
        colonyType: 'production',
        output: {
            production: 1
        },
        cost: 3,
        renown: -2
    }, {
        name: 'Refinery',
        type: 'colony',
        colonyType: 'utility',
        input: {
            production: 1
        },
        output: {
            production: 2
        },
        cost: 4,
        renown: 1
    }, {
        name: 'Secret Lab',
        type: 'colony',
        colonyType: 'utility',
        input: {
            manpower: 1
        },
        output: {
            science: 1
        },
        cost: 4,
        renown: -3
    }, {
        name: 'Hightech Colony',
        type: 'colony',
        colonyType: 'manpower',
        output: {
            manpower: 1,
            science: 1
        },
        cost: 8,
        renown: 2
    }, {
        name: 'Star University',
        type: 'colony',
        colonyType: 'utility',
        input: {
            manpower: 3
        },
        output: {
            science: 2
        },
        cost: 8,
        renown: 4
    }, {
        name: 'Asteroid Miner',
        type: 'ship',
        output: {
            production: 1
        },
        cost: 5
    }, {
        name: 'Tourist Resort',
        type: 'colony',
        colonyType: 'manpower',
        input: {
            manpower: 2
        },
        output: {
            card: 3
        },
        cost: 5,
        renown: 1
    }, {
        name: 'Thriving Colony',
        type: 'colony',
        colonyType: 'manpower',
        output: {
            manpower: 2
        },
        cost: 5,
        renown: 1,
        hand: true
    }, {
        name: 'Polluting Industry',
        type: 'colony',
        colonyType: 'utility',
        input: {
            manpower: 1
        },
        output: {
            production: 1
        },
        cost: 2,
        renown: -2,
        hand: true
    }, {
        name: 'Science Ship',
        type: 'ship',
        input: {
            manpower: 1
        },
        output: {
            science: 1
        },
        cost: 5
    }, {
        name: 'Research Institute',
        type: 'colony',
        colonyType: 'utility',
        input: {
            manpower: 2
        },
        output: {
            science: 1
        },
        cost: 3,
        renown: 1,
        hand: true
    }, {
        name: 'Outpost',
        type: 'colony',
        colonyType: 'utility',
        cost: 1,
        hand: true
    }, {
        name: 'Shoddy Camp',
        type: 'colony',
        colonyType: 'manpower',
        output: {
            manpower: 1
        },
        cost: 0,
        renown: -1
    }, {
        name: 'Mining Operation',
        type: 'colony',
        colonyType: 'production',
        input: {
            manpower: 1
        },
        output: {
            production: 2
        },
        cost: 2
    }, {
        name: 'Starport',
        type: 'colony',
        colonyType: 'utility',
        input: {
            production: 2
        },
        output: {
            card: 4
        },
        cost: 8,
        renown: 2
    }
];

export const SPACE_DECK = [
    {
        name: 'Space Pirates',
        type: 'event',
        area: 'core',
        playerCount: 1,
        cost: {
            production: 2
        },
        renown: 3,
        effect: [{
            turn: {
                card: -1
            }
        }]
    }, {
        name: 'Alien Artefact',
        type: 'anomaly',
        area: 'expanse',
        playerCount: 1,
        cost: {
            science: 2
        },
        renown: 5
    }, {
        name: 'Ferrous World',
        type: 'planet',
        area: 'expanse',
        playerCount: 1,
        slots: ['production', 'utility'],
        hazzard: 1,
        renown: 6
    }, {
        name: 'Phasing Wormhole',
        type: 'anomaly',
        area: 'fringe',
        playerCount: 1,
        cost: {
            science: 4
        },
        renown: 10
    }, {
        name: 'Ocean World',
        type: 'planet',
        area: 'core',
        playerCount: 1,
        slots: ['manpower'],
        renown: 4
    }, {
        name: 'Asteroid Field',
        type: 'planet',
        area: 'core',
        playerCount: 1,
        slots: ['production'],
        renown: 2
    }, {
        name: 'Space Race+',
        type: 'event',
        area: 'expanse',
        playerCount: 1,
        cost: {
            production: 3
        },
        renown: 4,
        effect: [{
            relinquish: {
                renown: 2
            }
        }]
    }, {
        name: 'Old World',
        type: 'planet',
        area: 'core',
        playerCount: 1,
        slots: ['manpower', 'utility'],
        renown: 1
    }, {
        name: 'Space Whales',
        type: 'anomaly',
        area: 'core',
        playerCount: 1,
        cost: {
            science: 1
        },
        renown: 3
    }, {
        name: 'Junk World',
        type: 'planet',
        area: 'core',
        playerCount: 1,
        slots: ['utility', 'utility'],
        bonus: { //What is this bonus exactly?
            production: 2
        },
        renown: 2
    }, {
        name: 'Temperate World',
        type: 'planet',
        area: 'expanse',
        playerCount: 1,
        slots: ['manpower', 'production'],
        renown: 5
    }, {
        name: 'Fossil World',
        type: 'planet',
        area: 'fringe',
        playerCount: 1,
        slots: ['utility'],
        renown: 8
    }
];