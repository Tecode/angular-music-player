import { Action } from '@ngrx/store';
import { TopListActionTypes } from '../actions';

export interface TopListAction extends Action {
  payload: any,
  index: number,
  size: number
}


export interface TopListState {
  loading?: boolean,
  topList: Array<any>,
  index?: 1,
  size?: 10
}

const initState: TopListState = {
  topList: [],
  index: 1,
  size: 10
};

export function topListStore(state: TopListState = initState, action: TopListAction): TopListState {
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