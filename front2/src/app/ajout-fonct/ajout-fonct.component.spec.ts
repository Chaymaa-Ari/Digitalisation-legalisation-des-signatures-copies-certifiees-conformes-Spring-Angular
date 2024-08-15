import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFonctComponent } from './ajout-fonct.component';

describe('AjoutFonctComponent', () => {
  let component: AjoutFonctComponent;
  let fixture: ComponentFixture<AjoutFonctComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutFonctComponent]
    });
    fixture = TestBed.createComponent(AjoutFonctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
