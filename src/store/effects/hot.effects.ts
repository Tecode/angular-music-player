import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HotActionTypes, LoadError, LoadSongListError } from '../actions';
import { of, forkJoin } from 'rxjs';
import { HotService } from '../../services';


@Injectable()
export class HotEffects {

  @Effect()
  loadHotData$ = this.actions$
    .pipe(
      ofType(HotActionTypes.LoadData),
      mergeMap(() =>
        forkJoin([
          this.hotService.loopList()
            .pipe(catchError(() => of({ 'code': -1, banners: [] }))),
          this.hotService.popularList()
            .pipe(catchError(() => of({ 'code': -1, result: [] }))),
        ])
          .pipe(
            map(data => ({ type: HotActionTypes.LoadSuccess, payload: data })),
            catchError((err) => {
              //call the action if there is an error
              return of(new LoadError(err["message"]));
            })
          ))
    )

  @Effect()
  loadSongListData$ = this.actions$
    .pipe(
      ofType(HotActionTypes.LoadSongListData),
      mergeMap((params) => this.hotService.songListDetail(params)
        .pipe(
          map((data: any) => ({ type: HotActionTypes.LoadSongListSuccess, payload: data.playlist })),
          catchError((err) => {
            //call the action if there is an error
            return of(new LoadSongListError(err["message"]));
          })
        ))
    )
  constructor(
    private actions$: Actions,
    private hotService: HotService
  ) { }
}