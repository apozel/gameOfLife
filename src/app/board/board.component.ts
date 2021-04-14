import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { COLS, BLOCK_SIZE, ROWS } from '../../environments/environment';
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
  constructor(private game: GameService) {
    this.grid = this.game.getGame();
  }

  ngOnInit(): void {}

  onStart() {
    this.game.startLife();
  }
  onStop() {
    this.game.stopLife();
  }
}
