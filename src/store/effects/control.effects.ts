import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { ControlService } from '../../services';
import { ControlActionTypes, ControlError } from '../actions';



@Injectable()
export class ControlEffects {
  @Effect()
  loadSongUrl$ = this.actions$
    .pipe(
      ofType(ControlActionTypes.LoadSongUrl),
      mergeMap((data) => this.controlService.songUrl(data)
          .pipe(
            map(data => ({ type: ControlActionTypes.LoadSongUrlSuccess, payload: data })),
            catchError((err) => {
              //call the action if there is an error
              return of(new ControlError(err["message"]));
            })
          ))
    )


    constructor(
      private actions$: Actions, 
      private controlService: ControlService
    ) { }

}
