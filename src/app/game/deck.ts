export const PLAYER_DECK = [
    {
        name: 'Home Planet',
        type: 'planet',
        slots: ['manpower', 'utility'],
        tokens: 0,
        area: 'start',
        playerCount: 1,
        start: true
    }, {
        name: 'Something',
        type: 'colony',
        colonyType: 'manpower',
        generate: {
            manpower: 1
        },
        start: true
    }
];

export const SPACE_DECK = [
    {
        name: 'Space Pirates',
        type: 'event',
        area: 'core',
        playerCount: 1
    }, {
        name: 'Space Pirates 2',
        type: 'event',
        area: 'core',
        playerCount: 1
    }, {
        name: 'Space Pirates 3',
        type: 'event',
        area: 'core',
        playerCount: 1
    }, {
        name: 'Space Pirates 4',
        type: 'event',
        area: 'expanse',
        playerCount: 1
    }, {
        name: 'Space Pirates 5',
        type: 'event',
        area: 'fringe',
        playerCount: 1
    }, {
        name: 'Space Pirates 6',
        type: 'event',
        area: 'core',
        playerCount: 2
    }
];