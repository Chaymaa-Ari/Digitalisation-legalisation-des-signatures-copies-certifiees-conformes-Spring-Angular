import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcommuneComponent } from './formcommune.component';

describe('FormcommuneComponent', () => {
  let component: FormcommuneComponent;
  let fixture: ComponentFixture<FormcommuneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormcommuneComponent]
    });
    fixture = TestBed.createComponent(FormcommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
