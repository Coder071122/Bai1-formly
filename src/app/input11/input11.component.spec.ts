import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input11Component } from './input11.component';

describe('Input11Component', () => {
  let component: Input11Component;
  let fixture: ComponentFixture<Input11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Input11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Input11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
