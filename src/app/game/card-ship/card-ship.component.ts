import { Component, OnInit, Input } from '@angular/core';
import { ShipCard } from '../ship-card';

@Component({
  selector: 'app-card-ship',
  templateUrl: './card-ship.component.html',
  styleUrls: ['./card-ship.component.css']
})
export class CardShipComponent implements OnInit {

  @Input() card: ShipCard;

  constructor() { }

  ngOnInit() {
  }

}
