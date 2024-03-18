import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dong4Component } from './dong4.component';

describe('Dong4Component', () => {
  let component: Dong4Component;
  let fixture: ComponentFixture<Dong4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dong4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dong4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
