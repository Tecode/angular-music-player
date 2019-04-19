import { Action } from '@ngrx/store';
import { HotActionTypes } from '../actions';

export interface HotAction extends Action {
  payload: any
}

export interface SongListDetail {
  coverImgUrl: string;
  name: string;
  listData: any[]
}

// 由于是QQ的接口不确定他会改，定义成这样保险一点
export interface HotState {
  loading?: boolean,
  slider: any[],
  recommendList: any[],
  songListDetail?: SongListDetail
}

const initState: HotState = {
  slider: [],
  recommendList: [],
  songListDetail: {
    coverImgUrl: '',
    name: '',
    listData: []
  }
};

export function hotStore(state: HotState = initState, action: HotAction): HotState {
  switch (action.type) {
    case HotActionTypes.LoadSuccess:
      state.slider = action.payload[0].banners;
      state.recommendList = action.payload[1].result;
      return state;
    case HotActionTypes.LoadError:
      console.log(action, '--------');
      return state;
    case HotActionTypes.LoadSongListSuccess:
      state.songListDetail.coverImgUrl = action.payload.coverImgUrl;
      state.songListDetail.name = action.payload.name;
      state.songListDetail.listData = action.payload.tracks;
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