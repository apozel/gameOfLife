import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [AppComponent, BoardComponent, GridComponent],
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
