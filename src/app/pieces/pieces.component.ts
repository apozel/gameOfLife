import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.scss'],
})
export class PiecesComponent implements OnInit {
  pieces = [
    [[0, 0]],
    [
      [0, 0],
      [0, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 3],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 2],
      [1, 3],
      [0, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [1, 1],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
      [2, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [0, 1],
      [1, 0],
      [2, 1],
      [2, 0],
    ],
    [
      [0, 2],
      [1, 1],
      [0, 1],
      [2, 1],
      [1, 0],
    ],
    [
      [1, 2],
      [1, 1],
      [0, 1],
      [2, 1],
      [1, 0],
    ],
    [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [1, 2],
    ],
  ];

  constructor() {}

  ngOnInit(): void {}

  /* drawPiece(piece, arr) {
    var wmax = 0;
    var vmax = 0;
    piece.children().remove();
    $.each(arr, function (k2, v2) {
      var block = $("<div class='block' />");
      block.css({
        top: v2[0] * 34 + 'px',
        left: v2[1] * 34 + 'px',
      });
      var c = Math.abs(v2[0] + 1) * 34;
      var d = Math.abs(v2[1] + 1) * 34;
      if (c > wmax) {
        wmax = c;
      }
      if (d > vmax) {
        vmax = d;
      }
      piece.append(block);
    });
    var tmax = Math.max(vmax, wmax);
    piece.css({
      width: vmax + 'px',
      height: wmax + 'px',
    });
  } */
}
