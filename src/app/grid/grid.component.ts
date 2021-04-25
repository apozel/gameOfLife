import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { COLS, BLOCK_SIZE, ROWS } from '../../environments/environment';
import { Life } from '../model/life';
import { GameService } from '../services/engine.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Input() grid!: Observable<Life[][]>;

  constructor(private game: GameService) {}

  ngOnInit(): void {}

  onClick(x: number, y: number) {
    this.game.changeCell(x, y);
  }

  trackByRowLife(index: number, arrayLife: Life[]) {
    return arrayLife;
  }

  trackByLife(index: number, life: Life): Life {
    return life;
  }
}
