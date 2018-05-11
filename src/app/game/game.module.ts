import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { GameService } from './game.service';
import { CardService } from './card.service';
import { CardAnomalyComponent } from './card-anomaly/card-anomaly.component';
import { CardEventComponent } from './card-event/card-event.component';
import { CardColonyComponent } from './card-colony/card-colony.component';
import { CardPlanetComponent } from './card-planet/card-planet.component';
import { CardShipComponent } from './card-ship/card-ship.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from './message.service';
import { EventService } from './event.service';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule,
    NgbModule
  ],
  providers: [GameService, CardService, MessageService, EventService],
  declarations: [BoardComponent, CardComponent, CardAnomalyComponent, CardEventComponent, CardColonyComponent, CardPlanetComponent, CardShipComponent]
})
export class GameModule { }
