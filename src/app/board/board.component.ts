import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { BehaviorSubject } from 'rxjs';
import { Life } from '../model/life';
import { ControllerService } from '../services/controller.service';
import { GameService } from '../services/engine.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  grid: BehaviorSubject<Life[][]>;
  value: BehaviorSubject<number>;

  textButton: BehaviorSubject<string> = new BehaviorSubject('Stop');
  constructor(
    private game: GameService,
    private controller: ControllerService
  ) {
    this.grid = this.game.getGame();
    this.value = this.controller.getTime();
    this.controller.getActive().forEach((state) => {
      this.textButton.next(!state ? 'Start' : 'Stop');
    });
  }

  ngOnInit(): void {}

  onChange(event: MatSliderChange): void {
    if (event.value) {
      this.controller.setTime(event.value);
    }
  }

  onReset(): void {
    this.controller.clear();
  }

  onToggleActive(): void {
    this.controller.ToggleActive();
  }

  onSpacePress(): void {
    this.onToggleActive();
  }
}
