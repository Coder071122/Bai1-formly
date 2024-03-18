import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dong3Component } from './dong3.component';

describe('Dong3Component', () => {
  let component: Dong3Component;
  let fixture: ComponentFixture<Dong3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dong3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dong3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
