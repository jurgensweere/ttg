import { Injectable } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './card';
import { SpaceCard } from './space-card';
import { ProcessCard } from './process-card';
import { PlanetCard } from './planet-card';
import { ColonyCard } from './colony-card';
import { ShipCard } from './ship-card';

const AREA_CORE = 'core';
const AREA_EXPANSE = 'expanse';
const AREA_FRINGE = 'fringe';

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
  relinquished: Card[];

  numPlayers: number = 1;

  constructor(private cardService:CardService) { }

  setupGame() {
    this.resetBoard();
    this.resetResources();
    
    // Create starting point
    this.createSpaceDeck();
    this.createPlayerDeck();
    this.drawSpaceCard();
  }

  startGame() {
    console.log('Game started');
    // draw space card equal to the number of players
    this.drawSpaceCard(this.numPlayers);

    // draw a card in hand
    this.drawCard();

    // startTurn
    this.startTurn();
  }

  endTurn() {
    this.resetResources();
  }

  startTurn() {
    this.drawSpaceCard();
    // resolve events
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
    this.relinquished = [];
    
    this.renown = 0;
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

  useCard(card:ProcessCard) {
    if (card.input) {
      // try to pay this
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
    })
  }
}
