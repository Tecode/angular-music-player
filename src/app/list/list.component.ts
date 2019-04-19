import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadTopListData } from '../../store';
import { TopListState } from '../../store/reducers/list.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  public topListStore$: Observable<TopListState>;
  public topListData: TopListState = {
    topList: []
  };

  public modifyArray(data: any[]): string {
    return data.map(item => item.name).join('/');
  }

  constructor(private store: Store<{ topListStore: TopListState }>) {
    this.topListStore$ = store.pipe(select('topListStore'))
  }

  ngOnInit() {
    this.store.dispatch(new LoadTopListData());
    this.topListStore$.subscribe(data => {
      console.log(data, '----->>');
      this.topListData = data;
    });
  }

}
