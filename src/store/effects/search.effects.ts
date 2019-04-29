import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TopListActionTypes, LoadTopListError } from '../actions';
import { SearchService } from '../../services';


@Injectable()
export class SearchEffects {

  // 获取搜索列表
  @Effect()
  searchData$ = this.actions$
    .pipe(
      ofType(TopListActionTypes.LoadData),
      mergeMap((data) => this.searchListService.searchResult(data)
          .pipe(
            map(data => ({ type: '[TopList API] Data Loaded Success', payload: data })),
            catchError((err) => {
              //call the action if there is an error
              return of(new LoadTopListError(err["message"]));
            })
          ))
    )

  // 热搜推荐

  constructor(
    private actions$: Actions,
    private searchListService: SearchService
  ) { }
}