import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadTopListData } from '../../store';
import { TopListStateData } from '../../store/reducers/list.reducer';
import {formatTime} from '../helpers/common';

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

  public modifyArray(data: any[]): string {
    return data.map(item => item.name).join('/');
  }

  public time(data: number): string{
    return formatTime(data/1000);
  }

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
