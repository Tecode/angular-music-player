import { Action } from '@ngrx/store';
import { HotActionTypes } from '../actions';

export interface HotAction extends Action {
  payload: object
}

// 由于是QQ的接口不确定他会改，定义成这样保险一点
export interface HotStateData {
  loading?: boolean,
  slider: any[],
  recommendList: any[],
  songListDetail?: any
}

const initState: HotStateData = {
  slider: [],
  recommendList: [],
  songListDetail: {}
};

export function hotStore(state: HotStateData = initState, action: HotAction): HotStateData {
  switch (action.type) {
    case HotActionTypes.LoadSuccess:
      state.slider = action.payload[0].banners;
      state.recommendList = action.payload[1].result;
      return state;
    case HotActionTypes.LoadError:
      console.log(action, '--------');
      return state;
    case HotActionTypes.LoadSongListSuccess:
      state.songListDetail = action.payload;
      return state;
    case HotActionTypes.LoadSongListError:
      console.log('获取出错了');
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