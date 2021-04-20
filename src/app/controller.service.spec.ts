import { TestBed } from '@angular/core/testing';

import { ControllerService } from './services/controller.service';

describe('ConstanteService', () => {
  let service: ControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
