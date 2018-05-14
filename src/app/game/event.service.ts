import { Injectable } from '@angular/core';
import { SpaceCard } from './space-card';
import { EventCard } from './event-card';

@Injectable()
export class EventService {

  constructor() { }

  getCardsToDiscard(cards: SpaceCard[]): number {
    return cards.reduce((acc, card) => {
      if (card instanceof EventCard) {
        const effect = card.effect.find(ef => ef.turn && ef.turn.card);
        if (effect) {
          acc -= effect.turn.card; // This is stored as a negative value
        }
      }
      return acc;
    }, 0);
  }
}
