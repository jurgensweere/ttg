import { Injectable } from '@angular/core';
import { PLAYER_DECK, SPACE_DECK } from './deck';
import { Card } from './card';
import { PlanetCard } from './planet-card';
import { ColonyCard } from './colony-card';
import { AnomalyCard } from './anomaly-card';
import { EventCard } from './event-card';
import { SpaceCard } from './space-card';

@Injectable()
export class CardService {

  constructor() { }

  getPlayerDeck(): Card[] {
    return PLAYER_DECK.map(card => this.deserializeCard(card));
  }

  getSpaceDeck(): SpaceCard[] {
    return <SpaceCard[]>SPACE_DECK.map(card => this.deserializeCard(card));
  }

  deserializeCard(card:any): Card {
    switch (card.type) {
      case 'planet':
          return new PlanetCard().deserialize(card);
      case 'colony':
          return new ColonyCard().deserialize(card);
      case 'anomaly':
          return new AnomalyCard().deserialize(card);
      case 'event':
          return new EventCard().deserialize(card);
      default:
          break;
    }
  }
}
