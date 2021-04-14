import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { GridComponent } from './grid/grid.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [AppComponent, BoardComponent, GridComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    DragDropModule,
    MatSliderModule,
    MatButtonModule,
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
