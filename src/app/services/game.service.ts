import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConstanteService } from '../constante.service';
import { Life } from '../model/life';
import { InitGameService } from './init-game.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private life: Life[][];
  private life$: BehaviorSubject<Life[][]>;
  private intervalKey: null | number = null;
  private timeIntervalle: number = 500;

  constructor(
    private initGame: InitGameService,
    private constantes: ConstanteService
  ) {
    this.life = initGame.initGame();
    this.life$ = new BehaviorSubject(this.life);

    this.constantes.getTime().subscribe((intervalle) => {
      this.stopLife();
      this.timeIntervalle = intervalle;
      this.startLife();
    });
  }

  setLife(life: Life[][]): void {
    this.life$.next(life);
    this.life = life;
  }

  public clear(): void {
    this.stopLife();
    this.life = this.initGame.initGame();
    this.life$.next(this.life);
  }

  public startLife(): void {
    if (!this.intervalKey) {
      this.intervalKey = window.setInterval(() => {
        this.life = this.life.map((children, i) =>
          children.map((isSurvive, j) => this.nextLife(j, i, isSurvive))
        );
        this.life$.next(this.life);
      }, this.timeIntervalle);
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
}
