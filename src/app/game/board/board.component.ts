import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { SpaceCard } from '../space-card';
import { PlanetCard } from '../planet-card';
import { ShipCard } from '../ship-card';
import { ProcessCard } from '../process-card';
import { CardService } from '../card.service';
import { Card } from '../card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  space: SpaceCard[];
  planets: PlanetCard[];
  ships: ShipCard[];
  hand: ProcessCard[];
  
  isHandOpen: boolean = false;
  
  constructor(public gameService:GameService, private cardService:CardService) { }
  
  ngOnInit() {
    this.gameService.setupGame();
    this.gameService.startGame();
    
    this.space = this.gameService.space;
    this.planets = this.gameService.planets;
    this.ships = this.gameService.ships;
    this.hand = this.gameService.playerHand;
    
    this.cardService.cardSelected$.subscribe(card => this.cardSelected(card) );
  }

  toggleHand() {
    this.isHandOpen = !this.isHandOpen;
  }

  cardSelected(card:Card) {
    this.isHandOpen = false;
    if (card instanceof ProcessCard && this.hand.indexOf(card) >= 0) {
      console.log('Selected from hand:', card);
      // Go into some sort of play context for the card
    } else if (card instanceof ProcessCard ) {
      this.gameService.useCard(card);
    }
  }
}
