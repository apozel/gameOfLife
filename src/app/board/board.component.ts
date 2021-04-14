import { Component, HostListener, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { BehaviorSubject } from 'rxjs';
import { COLS, BLOCK_SIZE, ROWS } from '../../environments/environment';
import { ConstanteService } from '../constante.service';
import { Life } from '../model/life';
import { GameService } from '../services/game.service';
import { InitGameService } from '../services/init-game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  grid: BehaviorSubject<Life[][]>;
  value: string = '5';
  running: boolean;
  textButton: BehaviorSubject<string> = new BehaviorSubject('Stop');
  constructor(private game: GameService, private constante: ConstanteService) {
    this.grid = this.game.getGame();
    this.running = true;
  }

  ngOnInit(): void {}

  onStart() {
    this.game.startLife();
    this.running = true;
  }
  onStop() {
    this.game.stopLife();
    this.running = false;
  }
  onChange(event: MatSliderChange) {
    if (event.value) {
      this.value = event.value.toString();
      this.constante.setTime(event.value * 100);
    }
  }

  onReset() {
    this.game.clear();
  }

  onSpacePress() {
    console.log('greeting');

    if (this.running) {
      this.onStop();
    } else {
      this.onStart();
    }

    this.textButton.next(this.running ? 'Start' : 'Stop');
  }
}
