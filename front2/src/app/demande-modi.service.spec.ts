import { TestBed } from '@angular/core/testing';

import { DemandeModiService } from './demande-modi.service';

describe('DemandeModiService', () => {
  let service: DemandeModiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeModiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
