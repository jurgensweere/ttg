import { Component, OnInit, Input } from '@angular/core';
import { PlanetCard } from '../planet-card';

@Component({
  selector: 'app-card-planet',
  templateUrl: './card-planet.component.html',
  styleUrls: ['./card-planet.component.css']
})
export class CardPlanetComponent implements OnInit {

  @Input() card: PlanetCard;
  @Input() claimed: boolean;
  hazzards = [];

  constructor() { }

  ngOnInit() {
    this.hazzards = Array(this.card.hazzard).fill(0).map((x, i) => i);
  }

}
