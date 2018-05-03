import { Component, OnInit, Input } from '@angular/core';
import { ColonyCard } from '../colony-card';

@Component({
  selector: 'app-card-colony',
  templateUrl: './card-colony.component.html',
  styleUrls: ['./card-colony.component.css']
})
export class CardColonyComponent implements OnInit {

  @Input() card: ColonyCard;
  constructor() { }

  ngOnInit() {
  }

}
