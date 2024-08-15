import { TestBed } from '@angular/core/testing';

import { FonctionnService } from './fonctionn.service';

describe('FonctionnService', () => {
  let service: FonctionnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FonctionnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
