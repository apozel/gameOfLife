import { Component, OnInit } from '@angular/core';
import { COLS, BLOCK_SIZE, ROWS } from '../../environments/environment';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  board: number[][];
  constructor() {
    this.board = Array(20)
      .fill(0)
      .map((x, i) => Array(20).fill(0));
  }

  ngOnInit(): void {}

  onClick(x: number, y: number) {
    console.log('x : ' + x + 'y : ' + y);
  }
}
