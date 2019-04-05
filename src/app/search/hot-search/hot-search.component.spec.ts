import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotSearchComponent } from './hot-search.component';

describe('HotSearchComponent', () => {
  let component: HotSearchComponent;
  let fixture: ComponentFixture<HotSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
