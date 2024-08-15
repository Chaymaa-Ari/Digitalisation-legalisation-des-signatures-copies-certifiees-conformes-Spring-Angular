import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashSignaComponent } from './dash-signa.component';

describe('DashSignaComponent', () => {
  let component: DashSignaComponent;
  let fixture: ComponentFixture<DashSignaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashSignaComponent]
    });
    fixture = TestBed.createComponent(DashSignaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
