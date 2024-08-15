import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeModifComponent } from './demande-modif.component';

describe('DemandeModifComponent', () => {
  let component: DemandeModifComponent;
  let fixture: ComponentFixture<DemandeModifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandeModifComponent]
    });
    fixture = TestBed.createComponent(DemandeModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
