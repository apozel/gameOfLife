import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  board: number[][];

  constructor() {}

  getRows(): number[][] {
    return this.board;
  }

  getCell(rowNumber: number): number[] {
    return this.board[rowNumber];
  }
}
