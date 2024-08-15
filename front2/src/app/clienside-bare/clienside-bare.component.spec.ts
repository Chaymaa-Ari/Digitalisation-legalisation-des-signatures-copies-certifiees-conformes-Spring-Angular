import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliensideBareComponent } from './clienside-bare.component';

describe('CliensideBareComponent', () => {
  let component: CliensideBareComponent;
  let fixture: ComponentFixture<CliensideBareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CliensideBareComponent]
    });
    fixture = TestBed.createComponent(CliensideBareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
