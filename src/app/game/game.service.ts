import { Injectable } from '@angular/core';
import { CardService } from './card.service';
import { Card } from './card';
import { SpaceCard } from './space-card';

const AREA_CORE = 'core';
const AREA_EXPANSE = 'expanse';
const AREA_FRINGE = 'fringe';

@Injectable()
export class GameService {

  playerCards: Card[];
  spaceCards: SpaceCard[];

  constructor(private cardService:CardService) { }

  setupGame() {
    this.createSpaceDeck();
    this.createPlayerDeck();
    this.createPlayerHand();
    this.generateStartingPosition();

    console.log(this.spaceCards);
    console.log(this.playerCards);

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
    this.playerCards = this.cardService.getPlayerDeck();
    // shuffle
  }

  createPlayerHand() {

  }

  generateStartingPosition() {}

  shuffle(cards:any[]) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}
}
