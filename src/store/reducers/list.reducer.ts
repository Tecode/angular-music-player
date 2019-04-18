import { Action } from '@ngrx/store';
import { TopListActionTypes } from '../actions';

export interface TopListAction extends Action {
  payload: any,
  index: number,
  size: number
}


export interface TopListStateData {
  loading?: boolean,
  topList: Array<any>,
  index?: 1,
  size?: 10
}

const initState: TopListStateData = {
  topList: [],
  index: 1,
  size: 10
};

export function topListStore(state: TopListStateData = initState, action: TopListAction): TopListStateData {
  switch (action.type) {
    case TopListActionTypes.LoadData:
      return state;
    case TopListActionTypes.LoadSuccess:
      state.topList = (action.payload.playlist.tracks || []).slice(state.index - 1, state.index * state.size);
      return state;
    case TopListActionTypes.LoadError:
      return state;
    default:
      return state;
  }
}