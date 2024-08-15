import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFonctioComponent } from './liste-fonctio.component';

describe('ListeFonctioComponent', () => {
  let component: ListeFonctioComponent;
  let fixture: ComponentFixture<ListeFonctioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeFonctioComponent]
    });
    fixture = TestBed.createComponent(ListeFonctioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
