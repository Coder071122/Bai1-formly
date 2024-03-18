import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextarenaComponent } from './textarena.component';

describe('TextarenaComponent', () => {
  let component: TextarenaComponent;
  let fixture: ComponentFixture<TextarenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextarenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextarenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
