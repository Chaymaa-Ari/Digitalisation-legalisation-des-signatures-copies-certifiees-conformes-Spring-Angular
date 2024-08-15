import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutClientComponent } from './form-ajout-client.component';

describe('FormAjoutClientComponent', () => {
  let component: FormAjoutClientComponent;
  let fixture: ComponentFixture<FormAjoutClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAjoutClientComponent]
    });
    fixture = TestBed.createComponent(FormAjoutClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
