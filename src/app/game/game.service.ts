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

  playerHand: ProcessCard[];
  playerDeck: ProcessCard[];
  spaceDeck: SpaceCard[];

  spaceDiscard: SpaceCard[];
  playerDiscard: ProcessCard[];
  relinquished: Card[];

  numPlayers: number = 1;

  constructor(private cardService:CardService) { }

  setupGame() {
    
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

    this.resetResources();
    
    // Create starting point
    this.createSpaceDeck();
    this.createPlayerDeck();
    this.drawSpaceCard();

    // console.log('Space Deck:', this.spaceDeck);
    // console.log('Player Deck', this.playerDeck);
    // console.log('Player Hand', this.playerHand);
    // console.log('Game Board:', this.planets, this.ships);
  }

  startGame() {
    console.log('Game started');
    // draw space card
    this.drawSpaceCard();
    // draw card in hand
  }

  endTurn() {
    this.resetResources();
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

  drawSpaceCard() {
    this.space.push(this.spaceDeck.shift());
    if (this.space.length > this.numPlayers + 1) {
      this.spaceDiscard.push(this.space.shift());
    }
  }
}
