import { Component, OnInit, Input } from '@angular/core';
import { SpaceCard } from '../space-card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: SpaceCard;

  constructor() { }

  ngOnInit() {
  }

}
