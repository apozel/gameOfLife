import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-canvas-playground',
  templateUrl: './canvas-playground.component.html',
  styleUrls: ['./canvas-playground.component.scss'],
})
export class CanvasPlaygroundComponent
  implements OnInit, OnDestroy, AfterViewInit {
  private destroy$: Subject<void> = new Subject();
  private loading = false;
  private fullScreen = false;

  private playgroundConfig: Config = new Config();

  @ViewChild('playground')
  private canvasRef!: ElementRef;
  private canvas!: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D | null = null;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initCanvas();
    this.fillSize();
    this.draw();
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }

  private onScreenResize() {
    this.fillSize();
    this.draw();
  }

  private initCanvas() {
    if (this.canvasRef) {
      this.canvas = this.canvasRef.nativeElement;
      this.ctx = this.canvas.getContext('2d');
    } else {
      throw new Error('undefined canvas REF');
    }
  }

  private fillSize() {
    this.canvas.style.height = '100%';
    this.canvas.style.width = '100%';
    this.playgroundConfig.screenSize(
      this.canvas.offsetWidth,
      this.canvas.offsetHeight
    );
    this.canvas.style.height = this.playgroundConfig.height + 'px';
    this.canvas.height = this.playgroundConfig.height;
    this.canvas.style.width = this.playgroundConfig.width + 'px';
    this.canvas.width = this.playgroundConfig.width;
  }

  private draw() {
    if (this.ctx) {
      this.ctx.fillStyle = 'grey';
      this.ctx.fillRect(
        0,
        0,
        this.playgroundConfig.width,
        this.playgroundConfig.height
      );
      for (let x = 0; x < this.playgroundConfig.columns; x++) {
        for (let y = 0; y < this.playgroundConfig.rows; y++) {
          const cellState: boolean = true;
          this.drawCell(x, y, cellState);
        }
      }
    } else {
      throw new Error('undefined canvas context');
    }
  }

  private drawCell(x: number, y: number, alive: boolean) {
    if (this.ctx) {
      const rectX =
        this.playgroundConfig.cellSpace +
        this.playgroundConfig.cellSpace * x +
        this.playgroundConfig.cellSize * x;
      const rectY =
        this.playgroundConfig.cellSpace +
        this.playgroundConfig.cellSpace * y +
        this.playgroundConfig.cellSize * y;
      const rectW = this.playgroundConfig.cellSize;
      const rectH = this.playgroundConfig.cellSize;
      const aliveColor = 'white';
      const deadColor = 'black';
      this.ctx.clearRect(rectX, rectY, rectW, rectH);
      this.ctx.fillStyle = deadColor;
      this.ctx.fillRect(rectX, rectY, rectW, rectH);
      if (alive) {
        this.ctx.fillStyle = aliveColor;
      } else {
        this.ctx.fillStyle = deadColor;
      }
      this.ctx.fillRect(rectX, rectY, rectW, rectH);
    } else {
      throw new Error('undefined canvas context');
    }
  }

  private getSelectedCell(position: {
    x: number;
    y: number;
  }): { x: number; y: number } {
    const x = Math.ceil(
      position.x /
        (this.playgroundConfig.cellSize + this.playgroundConfig.cellSpace) -
        1
    );
    const y = Math.ceil(
      position.y /
        (this.playgroundConfig.cellSize + this.playgroundConfig.cellSpace) -
        1
    );

    return { x: x, y: y };
  }
}

class Config {
  private _height = 0;
  private _width = 0;
  private _columns = 0;
  private _rows = 0;
  private _xScreenOffset = 0;
  private _yScreenOffset = 0;
  private baseCellSize = 10;
  private baseCellSpace = 1;
  public cellSize = this.baseCellSize;
  public cellSpace = this.baseCellSpace;

  constructor() {}

  public screenSize(width: number, height: number) {
    this._width = width;
    this._height = height;
    const oldColumns = this.columns;
    const oldRows = this.rows;
    this.determineColumnsAndRows();
    if (oldColumns != null && oldRows != null) {
      this._xScreenOffset =
        this._xScreenOffset + Math.round((oldColumns - this.columns) / 2);
      this._yScreenOffset =
        this._yScreenOffset + Math.round((oldRows - this.rows) / 2);
    }
    // this.emitChange();
  }

  private determineColumnsAndRows() {
    this._columns = Math.ceil(this._width / (this.cellSpace + this.cellSize));
    this._rows = Math.ceil(this._height / (this.cellSpace + this.cellSize));
  }

  get height(): number {
    return this._height;
  }
  get width(): number {
    return this._width;
  }

  get columns(): number {
    return this._columns;
  }

  get rows(): number {
    return this._rows;
  }
}
