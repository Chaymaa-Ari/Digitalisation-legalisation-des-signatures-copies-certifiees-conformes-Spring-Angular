import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashInscriptionParVilleComponent } from './dash-inscription-par-ville.component';

describe('DashInscriptionParVilleComponent', () => {
  let component: DashInscriptionParVilleComponent;
  let fixture: ComponentFixture<DashInscriptionParVilleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashInscriptionParVilleComponent]
    });
    fixture = TestBed.createComponent(DashInscriptionParVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
