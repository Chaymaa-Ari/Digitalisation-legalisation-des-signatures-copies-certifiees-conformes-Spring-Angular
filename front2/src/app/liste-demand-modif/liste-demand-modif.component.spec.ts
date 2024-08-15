import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDemandModifComponent } from './liste-demand-modif.component';

describe('ListeDemandModifComponent', () => {
  let component: ListeDemandModifComponent;
  let fixture: ComponentFixture<ListeDemandModifComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDemandModifComponent]
    });
    fixture = TestBed.createComponent(ListeDemandModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
