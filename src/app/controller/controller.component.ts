import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { BehaviorSubject } from 'rxjs';
import { ControllerService } from '../services/controller.service';
import { EngineService } from '../services/engine.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss'],
})
export class ControllerComponent implements OnInit {
  value: BehaviorSubject<number>;

  textButton: BehaviorSubject<string> = new BehaviorSubject('Stop');
  constructor(
    private game: EngineService,
    private controller: ControllerService
  ) {
    this.value = this.controller.getTime();
    this.controller.getActive().forEach((state) => {
      this.textButton.next(!state ? 'Start' : 'Stop');
    });
  }

  ngOnInit(): void {}

  onChange(event: MatSliderChange): void {
    if (event.value) {
      this.controller.setTime(event.value);
    }
  }

  onReset(): void {
    this.controller.clear();
  }

  onToggleActive(): void {
    this.controller.ToggleActive();
  }

  onSpacePress(): void {
    this.onToggleActive();
  }
}
