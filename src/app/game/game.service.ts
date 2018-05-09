import { Injectable } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './card';
import { SpaceCard } from './space-card';
import { ProcessCard } from './process-card';
import { PlanetCard } from './planet-card';
import { ColonyCard } from './colony-card';
import { ShipCard } from './ship-card';
import { EventCard } from './event-card';
import { AnomalyCard } from './anomaly-card';
import { MessageService } from './message.service';

const AREA_CORE = 'core';
const AREA_EXPANSE = 'expanse';
const AREA_FRINGE = 'fringe';

const MAX_PLANET_COUNT:number = 4;

@Injectable()
export class GameService {
    
    ships: ShipCard[];
    planets: PlanetCard[];
    space: SpaceCard[];
    
    manpower: number = 0;
    production: number = 0;
    science: number = 0;
    credits: number = 0;
    renown: number = 0;
    
    playerHand: ProcessCard[];
    playerDeck: ProcessCard[];
    spaceDeck: SpaceCard[];
    
    spaceDiscard: SpaceCard[];
    playerDiscard: ProcessCard[];
    scorePile: Card[];
    
    numPlayers: number = 1;

    spaceCardTaken:boolean = false;
    
    constructor(private cardService:CardService, private messageService:MessageService) { }
    
    setupGame() {
        this.resetBoard();
        this.resetResources();
        
        // Create starting point
        this.createSpaceDeck();
        this.createPlayerDeck();
        this.drawSpaceCard();
    }
    
    startGame() {
        this.messageService.addDebug('Game started');
        // draw space card equal to the number of players
        this.drawSpaceCard(this.numPlayers);
        
        // startTurn
        this.startTurn();
    }
    
    endTurn() {
        this.resetResources();
        this.spaceCardTaken = false;
        
        // is this the end of the game?
        if (this.gameOver()) {
            // Count all renown;
            
            // Some message to player
            this.messageService.addInfo(`Game over.`);
        } else {
            this.startTurn();
        }
    }
    
    startTurn() {
        this.untapCards();
        this.drawSpaceCard();
        this.drawCard();
        // TODO: resolve events
    }
    
    createSpaceDeck() {
        this.spaceDeck = this.shuffle(this.cardService.getSpaceDeck())
            // filter number of players
            .filter(card => card.playerCount <= 1)
            // sort by area
            .sort((a:SpaceCard, b:SpaceCard) => {
                if (a.area === b.area) {
                    return 0;
                }
                if (a.area < b.area ) {
                    return -1;
                }
                return 1;
            });
    }
    
    createPlayerDeck() {
        let allPlayerCards = this.cardService.getPlayerDeck();
        
        this.playerHand = allPlayerCards
            .filter(card => card.hand && !card.start && card instanceof ProcessCard)
            .map(card => <ProcessCard>card);
        
        this.playerDeck = this.shuffle(allPlayerCards)
            .filter(card => !card.hand)
            .map(card => <ProcessCard>card);
        
        this.generateStartingPosition(allPlayerCards);
    }
    
    generateStartingPosition(allPlayerCards:Card[]) {
        let startingPlanet:PlanetCard = <PlanetCard>allPlayerCards.find(card => card.start && card instanceof PlanetCard);
        let startingColony:ColonyCard = <ColonyCard>allPlayerCards.find(card => card.start && card instanceof ColonyCard);
        startingPlanet.colonize(startingColony);
        this.planets.push(startingPlanet);
    }
    
    shuffle(cards:any[]) {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        return cards;
    }
    
    resetResources() {
        this.manpower = 0;
        this.production = 0;
        this.science = 0;
        this.credits = 0; // Really?
    }
    
    resetBoard() {
        // Reset the board.
        this.ships = [];
        this.planets = [];
        this.space = [];
        this.playerHand = [];
        this.playerDeck = [];
        this.spaceDeck = [];
        
        this.spaceDiscard = [];
        this.playerDiscard = [];
        this.scorePile = [];
        
        this.renown = 0;
        this.spaceCardTaken = false;
    }
    
    untapCards() {
        this.planets.forEach(planet => {
            planet.colonies.forEach(colony => colony.tapped = false);
        });
        this.ships.forEach(ship => ship.tapped = false);
    }
    
    drawCard(amount:number = 1) {
        while (amount > 0) {
            // If the player deck is empty, re-use the discard pile
            if (this.playerDeck.length == 0) {
                this.playerDeck = this.shuffle(this.playerDiscard);
                this.playerDiscard = []; // maybe this clears the reference to playerdeck now
            }
            this.playerHand.push(this.playerDeck.shift());
            amount--;
        }
    }
    
    drawSpaceCard(amount:number = 1) {
        while (amount > 0) {
            this.space.push(this.spaceDeck.shift());
            amount--;
        }
        while (this.space.length > this.numPlayers + 1) {
            this.spaceDiscard.push(this.space.shift());
        }
    }
    
    discardCard(card:ProcessCard) {
        this.credits ++;
        this.playerDiscard.push(card);
        this.playerHand.splice(this.playerHand.indexOf(card), 1);
    }
    
    colonize(planet:PlanetCard, colony:ColonyCard):boolean {
        // Can we afford it?
        if (this.credits < colony.cost) {
            // toaster msg: you need more bla bla
            this.messageService.addWarning(`You need more credits, discard more cards`);
            return false
        }
        if (!planet.canColonize(colony)) {
            // toaster msg: Planet is full
            this.messageService.addWarning(`Planet has no space for ${colony.name}`);
            return false;
        }
        // Pay
        this.credits -= colony.cost;
        // Colonize
        planet.colonize(colony);
        this.playerHand.splice(this.playerHand.indexOf(colony), 1);
        return true;
    }
    
    colonizeNewPlanet(planet:PlanetCard, colony:ColonyCard):boolean {
        if (this.spaceCardTaken) {
            this.messageService.addWarning(`You can only take 1 card from space per turn.`);
            return false;
        }
        this.spaceCardTaken = true;
        if (this.planets.length >= MAX_PLANET_COUNT) {
            this.messageService.addWarning(`You can only have ${MAX_PLANET_COUNT} planets. Relinquish a planet first.`);
            return false;
        }
        if (this.colonize(planet, colony)) {
            // we need to move the planet to the board
            this.planets.push(planet);
            this.space.splice(this.space.indexOf(planet), 1);
            return true;
        }
        return false;
    }

    buyEvent(eventCard:EventCard):boolean {
        // can we afford this?
        if(!eventCard.canAfford(this.manpower, this.production, this.science, this.credits, this.renown)) {
            this.messageService.addWarning(`You need more monies`);
            return false;
        }
        // Buy it
        this.payResources(eventCard.cost);
        // Move to scorePile
        this.moveToScorePile(eventCard);
        return true;
    }

    buyAnomaly(anomalyCard:AnomalyCard) {
        // can we afford this?
        if(!anomalyCard.canAfford(this.manpower, this.production, this.science, this.credits, this.renown)) {
            this.messageService.addWarning(`You need more monies`);
            return false;
        }
        // Buy it
        this.payResources(anomalyCard.cost);
        // Move to scorePile
        this.moveToScorePile(anomalyCard);
        return true;
    }

    relinquishPlanet(planet:PlanetCard) {
        // TODO: some checks if this can be done.
        this.moveToScorePile(planet);
    }

    moveToScorePile(card:Card) {
        this.scorePile.push(card);
        this.renown += card.renown;
        if (card instanceof SpaceCard && this.space.indexOf(card) >= 0) {
            this.space.splice(this.space.indexOf(card), 1);
        }
        if (card instanceof PlanetCard && this.planets.indexOf(card) >= 0) {
            card.colonies.forEach(colony => this.renown += colony.renown);
            this.planets.splice(this.planets.indexOf(card), 1);
        }
    }
    
    deployShip(ship:ShipCard):boolean {
        //Check monies
        if (this.credits < ship.cost) {
            this.messageService.addWarning(`You need more credits to deploy ${ship.name}`);
            return false;
        }
        // Pay
        this.credits -= ship.cost;
        // Play
        this.ships.push(ship);
        this.playerHand.splice(this.playerHand.indexOf(ship), 1);
    }
    
    useCard(card:ProcessCard) {
        if (card.tapped || !card.canAfford(this.manpower, this.production, this.science, this.credits, this.renown)) {
            return;
        }
        if (card.input) {
            this.payResources(card.input);
        }
        // cash out!
        card.tapped = true;
        Object.keys(card.output).forEach(currency => {
            switch (currency) {
                case 'manpower':
                this.manpower += card.output[currency];
                break;
                case 'production':
                this.production += card.output[currency];
                break;
                case 'science':
                this.science += card.output[currency];
                break;
                case 'renown':
                this.renown += card.output[currency];
                break;
                case 'card':
                this.drawCard(card.output[currency]);
                break;
                default:
                break;
            }
        });
    }

    payResources(currencies:any) {
        Object.keys(currencies).forEach(currency => {
            switch (currency) {
                case 'manpower':
                    this.manpower -= currencies[currency];
                    break;
                case 'production':
                    this.production -= currencies[currency];
                    break;
                case 'science':
                    this.science -= currencies[currency];
                    break;
                case 'renown':
                    this.renown -= currencies[currency];
                    break;
                case 'card':
                    this.credits -= currencies[currency];
                    break;
                default:
                    break;
            }
        });
    }
    
    gameOver():boolean {
        return this.spaceDeck.length == 0;
    }
}
