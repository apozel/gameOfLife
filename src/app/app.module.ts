import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { PiecesComponent } from './pieces/pieces.component';

import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PieceComponent } from './pieces/piece/piece.component';
@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
    ChatComponent,
    LoginComponent,
    BoardComponent,
    PiecesComponent,
    PieceComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    DragDropModule,
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
