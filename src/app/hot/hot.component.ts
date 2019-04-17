import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadHotData } from '../../store';
import { HotStateData } from '../../store/reducers/hot.reducer';

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.less']
})
export class HotComponent implements OnInit {
  public hotStore$: Observable<HotStateData>;
  public hotData: HotStateData = {
    slider: [],
    recommendList: []
  };

  @ViewChild('slider') slider: ElementRef;

  constructor(private store: Store<{ hotStore: HotStateData }>) {
    this.hotStore$ = store.pipe(select('hotStore'));
  }

  ngOnInit() {
    this.store.dispatch(new LoadHotData());
    this.hotStore$.subscribe(data => {
      this.hotData = data;
    });
  }
}
