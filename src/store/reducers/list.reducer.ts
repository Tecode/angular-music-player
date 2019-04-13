import { Action } from '@ngrx/store';
import { TopListActionTypes } from '../actions';

export interface TopListAction extends Action {
  payload: any
}


export interface TopListStateData {
  loading?: boolean,
  topList: Array<any>,
}

const initState: TopListStateData = {
  topList: []
};

export function topListStore(state: TopListStateData = initState, action: TopListAction): TopListStateData {
  switch (action.type) {
    case TopListActionTypes.LoadData:
      return state;
    case TopListActionTypes.LoadSuccess:
      state.topList = action.payload.playlist.tracks;
      return state;
    case TopListActionTypes.LoadError:
      return state;
    default:
      return state;
  }
}