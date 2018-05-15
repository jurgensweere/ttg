import { Injectable } from '@angular/core';
import { SpaceCard } from './space-card';
import { EventCard } from './event-card';

@Injectable()
export class EventService {

  constructor() { }

  getCardsToDiscard(cards: SpaceCard[]): number {
    return cards.reduce((acc, card) => {
      if (card instanceof EventCard) {
        if (card.effect.turn) {
          acc -= card.effect.turn.card; // This is stored as a negative value
        }
      }
      return acc;
    }, 0);
  }

  getRelinquishBonus(cards: SpaceCard[]): EventBonus {
    return cards.reduce((bonus, card) => {
      if (card instanceof EventCard) {
        if (card.effect.relinquish) {
          bonus.renown += card.effect.relinquish.renown || 0;
          bonus.production += card.effect.relinquish.production || 0;
          bonus.manpower += card.effect.relinquish.manpower || 0;
          bonus.science += card.effect.relinquish.science || 0;
          bonus.card += card.effect.relinquish.card || 0;
        }
      }
      return bonus;
    }, new EventBonus())
  }
}

export class EventBonus {
  renown = 0;
  production = 0;
  manpower = 0;
  science = 0;
  card = 0;
}