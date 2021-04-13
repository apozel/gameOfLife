import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.scss'],
})
export class PieceComponent implements OnInit {
  @Input()
  public blocks!: number[][];

  constructor() {}

  ngOnInit(): void {}
}
