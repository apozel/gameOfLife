import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TIME } from 'src/environments/environment';
import { GameService } from './engine.service';

@Injectable({
  providedIn: 'root',
})
// todo : change name to controller;
export class ControllerService {
  time: BehaviorSubject<number> = new BehaviorSubject(1);
  private active: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private gameService: GameService) {
    this.subcription();
  }

  private subcription(): void {
    this.time.forEach((intervalle) => {
      this.gameService.stopLife();
      this.gameService.setTimer(intervalle * TIME);
      if (this.active.getValue()) {
        this.gameService.startLife();
      }
    });
    this.active.forEach((status) => {
      status ? this.gameService.startLife() : this.gameService.stopLife();
    });
  }

  setTime(time: number): void {
    this.time.next(time);
  }
  getTime(): BehaviorSubject<number> {
    return this.time;
  }

  ToggleActive(): void {
    this.active.next(!this.active.getValue());
  }
  getActive(): BehaviorSubject<boolean> {
    return this.active;
  }

  clear() {
    this.active.next(false);
    this.gameService.clear();
  }
}
