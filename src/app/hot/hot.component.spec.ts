import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotComponent } from './hot.component';

describe('HotComponent', () => {
  let component: HotComponent;
  let fixture: ComponentFixture<HotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
