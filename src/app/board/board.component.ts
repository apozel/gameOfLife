import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { BehaviorSubject } from 'rxjs';
import { Life } from '../model/life';
import { ControllerService } from '../services/controller.service';
import { EngineService } from '../services/engine.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  grid: BehaviorSubject<Life[][]>;

  constructor(
    private game: EngineService,
    private controller: ControllerService
  ) {
    this.grid = this.game.getGame();
  }

  ngOnInit(): void {}

  onToggleActive(): void {
    this.controller.ToggleActive();
  }

  onSpacePress(): void {
    this.onToggleActive();
  }
}
