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
  handCards: ProcessCard[];
  playerCards: ProcessCard[];
  spaceCards: SpaceCard[];

  constructor(private cardService:CardService) { }

  setupGame() {
    
    // Reset the board.
    this.ships = [];
    this.planets = [];
    this.handCards = [];
    this.playerCards = [];
    this.spaceCards = [];
    
    // Create starting point
    this.createSpaceDeck();
    this.createPlayerDeck();

    console.log('Space Deck:', this.spaceCards);
    console.log('Player Deck', this.playerCards);
    console.log('Player Hand', this.handCards);
    console.log('Game Board:', this.planets, this.ships);
  }

  createSpaceDeck() {
    this.spaceCards = this.shuffle(this.cardService.getSpaceDeck())
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

    this.handCards = allPlayerCards
      .filter(card => card.hand && !card.start && card instanceof ProcessCard)
      .map(card => <ProcessCard>card);

    this.playerCards = this.shuffle(allPlayerCards)
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
}
