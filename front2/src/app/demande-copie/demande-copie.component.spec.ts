import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeCopieComponent } from './demande-copie.component';

describe('DemandeCopieComponent', () => {
  let component: DemandeCopieComponent;
  let fixture: ComponentFixture<DemandeCopieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandeCopieComponent]
    });
    fixture = TestBed.createComponent(DemandeCopieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
