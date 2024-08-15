import { TestBed } from '@angular/core/testing';

import { DemandeModifService } from './demande-modif.service';

describe('DemandeModifService', () => {
  let service: DemandeModifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeModifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
