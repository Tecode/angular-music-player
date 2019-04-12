import { Action } from '@ngrx/store';
import { HotActionTypes } from '../actions';

export interface HotAction extends Action {
  payload: object
}

// 由于是QQ的接口不确定他会改，定义成这样保险一点
export interface HotStateData {
  loading?: boolean,
  radioList: Array<any>,
  slider: Array<any>,
  songList: Array<any>,
  topList: Array<any>,
}

export const hotSate: HotStateData = {
  radioList: [],
  slider: [],
  songList: [],
  topList: [],
};

export function hotStore(state: HotStateData = hotSate, action: HotAction): HotStateData {
  switch (action.type) {
    case HotActionTypes.LoadData:
      return state;
    case HotActionTypes.LoadSuccess:
      const interface01 = action.payload[0].data;
      const interface02 = action.payload[1].data;
      state.radioList = interface01.radioList;
      state.slider = interface01.slider;
      state.songList = interface01.songList
      state.topList = interface02.topList;
      return state;
    case HotActionTypes.LoadError:
      console.log(action, '--------');
      return state;
    default:
      return state;
  }
}

//------------------ Access slices of the state (something like getters)

// export const getWeatherLoading = (state: number) => {
//   return state.loading;
// }

// export const getWeatherLoaded = (state: number) => {
//    return state.loaded;
// }

// export const getWeatherData = (state: number) => {
//    return state.data;
// }