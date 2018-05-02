import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { BoardComponent } from './board/board.component';
import { CardComponent } from './card/card.component';
import { GameService } from './game.service';
import { CardService } from './card.service';

@NgModule({
  imports: [
    CommonModule,
    GameRoutingModule
  ],
  providers: [GameService, CardService ],
  declarations: [BoardComponent, CardComponent]
})
export class GameModule { }
