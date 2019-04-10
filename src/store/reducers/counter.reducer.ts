import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions';


export const initialState = 0;

export function counterReducer(state = initialState, action: Action): number {
  switch (action.type) {
    case ActionTypes.Increment:
      return state + 1;

    case ActionTypes.Decrement:
      return state - 1;

    case ActionTypes.Reset:
      return 0;

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