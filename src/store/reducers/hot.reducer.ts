import { Action } from '@ngrx/store';
import { HotActionTypes } from '../actions';

export interface HotStateData {
  loading?: boolean
}

export const hotSate = {};

export function hotStore(state: HotStateData = hotSate, action: Action): HotStateData {
  switch (action.type) {
    case HotActionTypes.LoadData:
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