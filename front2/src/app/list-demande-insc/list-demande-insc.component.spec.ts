import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemandeInscComponent } from './list-demande-insc.component';

describe('ListDemandeInscComponent', () => {
  let component: ListDemandeInscComponent;
  let fixture: ComponentFixture<ListDemandeInscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDemandeInscComponent]
    });
    fixture = TestBed.createComponent(ListDemandeInscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
