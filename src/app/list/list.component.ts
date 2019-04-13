import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TopListStateData } from '../../store/reducers/list.reducer';
import { Observable } from 'rxjs';
import { LoadTopListData } from '../../store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  public topListStore$: Observable<TopListStateData>;
  public topListData: TopListStateData = {
    topList: []
  };


  constructor(private store: Store<{ topListStore: TopListStateData }>) {
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
