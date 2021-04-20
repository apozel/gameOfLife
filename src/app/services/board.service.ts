import { Injectable } from '@angular/core';
import { SIZE } from 'src/environments/environment';
import { Life } from '../model/life';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  constructor() {}

  initGame(): Life[][] {
    return Array(SIZE)
      .fill(0)
      .map((x, i) => Array(SIZE).fill(0));
  }
}
