import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TIME } from 'src/environments/environment';
import { Life } from '../model/life';
import { BoardService } from './board.service';

@Injectable({
  providedIn: 'root',
})
export class EngineService {
  private life: Life[][];
  private life$: BehaviorSubject<Life[][]>;
  private intervalKey: null | number = null;
  private timer: number = TIME;

  constructor(private boardService: BoardService) {
    this.life = boardService.initGame();
    this.life$ = new BehaviorSubject(this.life);
  }

  setLife(life: Life[][]): void {
    this.life$.next(life);
    this.life = life;
  }

  public clear(): void {
    this.stopLife();
    this.life = this.boardService.initGame();
    this.life$.next(this.life);
  }

  public startLife(): void {
    if (!this.intervalKey) {
      this.intervalKey = window.setInterval(() => {
        this.life = this.life.map((children, i) =>
          children.map((isSurvive, j) => this.nextLife(j, i, isSurvive))
        );
        this.life$.next(this.life);
      }, this.timer);
    }
  }

  public stopLife(): void {
    if (this.intervalKey !== null) {
      window.clearInterval(this.intervalKey);
      this.intervalKey = null;
    }
  }

  protected isSurvive(x: number, y: number): Life {
    return this.life[y] && this.life[y][x] ? 1 : 0;
  }

  protected nextLife(x: number, y: number, isSurvive: Life): Life {
    const count =
      this.isSurvive(x - 1, y - 1) +
      this.isSurvive(x, y - 1) +
      this.isSurvive(x + 1, y - 1) +
      this.isSurvive(x - 1, y) +
      this.isSurvive(x + 1, y) +
      this.isSurvive(x - 1, y + 1) +
      this.isSurvive(x, y + 1) +
      this.isSurvive(x + 1, y + 1);
    return count === 3 || (isSurvive && count === 2) ? 1 : 0;
  }

  changeCell(x: number, y: number) {
    this.life[x][y] = this.life[x][y] == 0 ? 1 : 0;
    this.life$.next(this.life);
  }

  getGame(): BehaviorSubject<Life[][]> {
    return this.life$;
  }

  setTimer(intervalle: number) {
    this.timer = intervalle;
  }
}
