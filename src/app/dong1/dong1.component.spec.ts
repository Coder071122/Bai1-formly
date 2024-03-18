import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dong1Component } from './dong1.component';

describe('Dong1Component', () => {
  let component: Dong1Component;
  let fixture: ComponentFixture<Dong1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dong1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dong1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
