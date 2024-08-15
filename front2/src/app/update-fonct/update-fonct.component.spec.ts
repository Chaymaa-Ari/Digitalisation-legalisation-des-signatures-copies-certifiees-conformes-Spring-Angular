import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFonctComponent } from './update-fonct.component';

describe('UpdateFonctComponent', () => {
  let component: UpdateFonctComponent;
  let fixture: ComponentFixture<UpdateFonctComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateFonctComponent]
    });
    fixture = TestBed.createComponent(UpdateFonctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
