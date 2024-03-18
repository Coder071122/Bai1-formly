import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dong6Component } from './dong6.component';

describe('Dong6Component', () => {
  let component: Dong6Component;
  let fixture: ComponentFixture<Dong6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dong6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dong6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
