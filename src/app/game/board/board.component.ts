import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { SpaceCard } from '../space-card';
import { PlanetCard } from '../planet-card';
import { ShipCard } from '../ship-card';
import { ProcessCard } from '../process-card';
import { CardService } from '../card.service';
import { Card } from '../card';
import { ColonyCard } from '../colony-card';
import { EventCard } from '../event-card';
import { AnomalyCard } from '../anomaly-card';
import { MessageService, IMessage } from '../message.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  cardSelectedContext: ProcessCard;
  
  constructor(public gameService:GameService, public messageService:MessageService, private modalService: NgbModal) { }
  
  ngOnInit() {
    this.gameService.setupGame();
    this.gameService.startGame();
    
    this.space = this.gameService.space;
    this.planets = this.gameService.planets;
    this.ships = this.gameService.ships;
    this.hand = this.gameService.playerHand;
  }

  toggleHand() {
    this.isHandOpen = !this.isHandOpen;
  }

  onCardUsed(card:ProcessCard) {
    this.gameService.useCard(card);
  }

  onHandCardSelected(card:ProcessCard) {
    this.isHandOpen = false;
    this.cardSelectedContext = card;
  }

  onCardDiscardClicked() {
    // discard cardselected context for credits.
    this.gameService.discardCard(this.cardSelectedContext);
    this.cardSelectedContext = null;
  }

  onPlanetClicked(planet:PlanetCard, content) {
    // Colonize planet with cardselected context
    if (this.cardSelectedContext instanceof ColonyCard) {
      this.gameService.colonize(planet, this.cardSelectedContext);
    } else {
      this.modalService.open(content).result.then((result) => {
        if (result == 'yes') {
          this.gameService.relinquishPlanet(planet);
        }
      });
      
    }
    this.cardSelectedContext = null;
  }

  onSpaceCardClicked(spaceCard:Card) {
    if (spaceCard instanceof PlanetCard && this.cardSelectedContext instanceof ColonyCard) {
      this.gameService.colonizeNewPlanet(spaceCard, this.cardSelectedContext);
    }
    if (spaceCard instanceof EventCard) {
      this.gameService.buyEvent(spaceCard);
    }
    if (spaceCard instanceof AnomalyCard) {
      this.gameService.buyAnomaly(spaceCard);
    }
    this.cardSelectedContext = null;
  }

  onDeploySpaceShipClicked() {
    if (this.cardSelectedContext instanceof ShipCard) {
      this.gameService.deployShip(this.cardSelectedContext);
    }
    this.cardSelectedContext = null;
  }
}
