import { Component, OnInit, Input } from '@angular/core';
import { EventCard } from '../event-card';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.css']
})
export class CardEventComponent implements OnInit {

  @Input() card: EventCard;
  
  constructor() { }

  ngOnInit() {
  }

}
