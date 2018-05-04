import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { SpaceCard } from '../space-card';
import { PlanetCard } from '../planet-card';
import { ShipCard } from '../ship-card';
import { ProcessCard } from '../process-card';

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

  manpower: number;
  production: number;
  science: number;
  credits: number;
  renown: number;

  constructor(private gameService:GameService) { }

  ngOnInit() {
    this.gameService.setupGame();
    this.gameService.startGame();

    this.space = this.gameService.space;
    this.planets = this.gameService.planets;
    this.ships = this.gameService.ships;
    this.hand = this.gameService.playerHand;

    this.manpower = this.gameService.manpower;
    this.production = this.gameService.production;
    this.science = this.gameService.science;
    this.credits = this.gameService.credits;
    this.renown = this.gameService.renown;
  }

}
