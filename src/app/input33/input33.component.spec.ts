import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input33Component } from './input33.component';

describe('Input33Component', () => {
  let component: Input33Component;
  let fixture: ComponentFixture<Input33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Input33Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Input33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
