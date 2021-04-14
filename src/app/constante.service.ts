import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TIME } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConstanteService {
  time: BehaviorSubject<number> = new BehaviorSubject(TIME);

  constructor() {}
  setTime(time: number) {
    this.time.next(time);
  }
  getTime() {
    return this.time;
  }
}
