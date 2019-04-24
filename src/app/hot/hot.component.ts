import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadHotData } from '../../store';
import { HotState } from '../../store/reducers/hot.reducer';
import { ControlState } from '../../store/reducers/control.reducer';

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.less']
})
export class HotComponent implements OnInit {
  public hotStore$: Observable<HotState>;
  public controlStore$: Observable<ControlState>;
  public hotData: HotState = {
    slider: [],
    recommendList: []
  };
  public miniPlayer: boolean;

  @ViewChild('slider') slider: ElementRef;

  constructor(private store: Store<{ hotStore: HotState, controlStore: ControlState }>) {
    this.hotStore$ = store.pipe(select('hotStore'));
    this.controlStore$ = store.pipe(select('controlStore'));
  }

  ngOnInit() {
    this.store.dispatch(new LoadHotData());
    this.hotStore$.subscribe(data => {
      this.hotData = data;
    });
    this.controlStore$.subscribe(data => {
      this.miniPlayer = data.miniPlayer;
    })
  }
}
