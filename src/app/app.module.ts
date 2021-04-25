import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { GridComponent } from './grid/grid.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { GridListComponent } from './grid-list/grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ControllerComponent } from './controller/controller.component';
import { CanvasPlaygroundComponent } from './playground/canvas-playground/canvas-playground.component';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    GridComponent,
    GridListComponent,
    ControllerComponent,
    CanvasPlaygroundComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    DragDropModule,
    MatSliderModule,
    MatButtonModule,
    MatGridListModule,
    AppRoutingModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
