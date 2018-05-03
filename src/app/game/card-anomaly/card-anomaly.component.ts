import { Component, OnInit, Input } from '@angular/core';
import { AnomalyCard } from '../anomaly-card';

@Component({
  selector: 'app-card-anomaly',
  templateUrl: './card-anomaly.component.html',
  styleUrls: ['./card-anomaly.component.css']
})
export class CardAnomalyComponent implements OnInit {

  @Input() card: AnomalyCard;

  constructor() { }

  ngOnInit() {
  }

}
