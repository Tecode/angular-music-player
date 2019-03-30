import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCardComponent } from './big-card.component';

describe('BigCardComponent', () => {
  let component: BigCardComponent;
  let fixture: ComponentFixture<BigCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
