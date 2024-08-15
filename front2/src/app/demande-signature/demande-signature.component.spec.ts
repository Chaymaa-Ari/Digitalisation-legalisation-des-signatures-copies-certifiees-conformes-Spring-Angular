import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeSignatureComponent } from './demande-signature.component';

describe('DemandeSignatureComponent', () => {
  let component: DemandeSignatureComponent;
  let fixture: ComponentFixture<DemandeSignatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandeSignatureComponent]
    });
    fixture = TestBed.createComponent(DemandeSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
