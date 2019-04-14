import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListDetailComponent } from './song-list-detail.component';

describe('SongListDetailComponent', () => {
  let component: SongListDetailComponent;
  let fixture: ComponentFixture<SongListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
