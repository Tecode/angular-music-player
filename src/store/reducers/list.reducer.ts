import { Action } from '@ngrx/store';
import { TopListActionTypes } from '../actions';

export interface TopListAction extends Action {
  payload: any
}


export interface TopListState {
  loading?: boolean,
  topList: Array<any>,
  totalData: Array<any>,
  index?: number,
  size?: number,
  total?: number
}

const initState: TopListState = {
  topList: [],
  totalData: [],
  index: 1,
  size: 10,
  total: 0
};

export function topListStore(state: TopListState = initState, action: TopListAction): TopListState {
  switch (action.type) {
    case TopListActionTypes.LoadData:
      return state;
    case TopListActionTypes.LoadSuccess:
      state.totalData = action.payload.playlist.tracks;
      state.topList = (action.payload.playlist.tracks || []).slice(state.index - 1, state.index * state.size);
      state.total = Math.ceil(action.payload.playlist.tracks.length / state.size)
      return state;
    case TopListActionTypes.LoadError:
      return state;
    case TopListActionTypes.ChangeValue:
      state.index = action.payload.value;
      state.topList = (state.totalData || []).slice(0, action.payload.value * state.size);
      return state;
    default:
      return state;
  }
}