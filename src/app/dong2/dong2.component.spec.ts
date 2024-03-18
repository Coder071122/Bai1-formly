import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dong2Component } from './dong2.component';

describe('Dong2Component', () => {
  let component: Dong2Component;
  let fixture: ComponentFixture<Dong2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dong2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dong2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
