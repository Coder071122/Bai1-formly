import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dong5Component } from './dong5.component';

describe('Dong5Component', () => {
  let component: Dong5Component;
  let fixture: ComponentFixture<Dong5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dong5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dong5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
