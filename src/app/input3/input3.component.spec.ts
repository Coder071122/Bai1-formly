import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input3Component } from './input3.component';

describe('Input3Component', () => {
  let component: Input3Component;
  let fixture: ComponentFixture<Input3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Input3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Input3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
