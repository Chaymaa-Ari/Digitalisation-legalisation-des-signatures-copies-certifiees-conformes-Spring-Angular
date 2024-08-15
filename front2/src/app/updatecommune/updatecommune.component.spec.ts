import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecommuneComponent } from './updatecommune.component';

describe('UpdatecommuneComponent', () => {
  let component: UpdatecommuneComponent;
  let fixture: ComponentFixture<UpdatecommuneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatecommuneComponent]
    });
    fixture = TestBed.createComponent(UpdatecommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
