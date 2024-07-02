import { TestBed } from '@angular/core/testing';

import { CalificacionesService } from './calificaciones.service';

describe('CalificacionesService', () => {
  let service: CalificacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalificacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
