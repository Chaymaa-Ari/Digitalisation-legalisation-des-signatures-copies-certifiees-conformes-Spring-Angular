import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSignatureComponent } from './liste-signature.component';

describe('ListeSignatureComponent', () => {
  let component: ListeSignatureComponent;
  let fixture: ComponentFixture<ListeSignatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeSignatureComponent]
    });
    fixture = TestBed.createComponent(ListeSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
