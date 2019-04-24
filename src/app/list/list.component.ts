import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadTopListData, ChangeTopListValue } from '../../store';
import { TopListState } from '../../store/reducers/list.reducer';
import { ControlState } from '../../store/reducers/control.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  public topListStore$: Observable<TopListState>;
  public controlStore$: Observable<ControlState>;
  public topListData: TopListState = {
    topList: []
  };
  public miniPlayer: boolean;

  public modifyArray(data: any[]): string {
    return data.map(item => item.name).join('/');
  }

  constructor(private store: Store<{ topListStore: TopListState, controlStore: ControlState }>) {
    this.topListStore$ = store.pipe(select('topListStore'));
    this.controlStore$ = store.pipe(select('controlStore'));
  }

  ngOnInit() {
    this.store.dispatch(new LoadTopListData());
    this.topListStore$.subscribe(data => {
      console.log(data, '----->>');
      this.topListData = data;
    });
    this.controlStore$.subscribe(data => {
      this.miniPlayer = data.miniPlayer;
    })
  }

  public handlerScroll() {
    const { index, total } = this.topListData;
    if (index < total) {
      this.store.dispatch(new ChangeTopListValue({ key: 'index', value: index + 1 }));
    }
  }

}
