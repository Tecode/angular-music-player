import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

//import the weather reducer
import { counterReducer } from './counter.reducer';
import { hotStore, HotState } from './hot.reducer';
import { topListStore, TopListState } from './list.reducer';
import { controlStore, ControlState } from './control.reducer';

//state
export interface state {
    count: number;
    hotStore: HotState;
    topListStore: TopListState;
    controlStore: ControlState;
}

//register the reducer functions
export const reducers: ActionReducerMap<state> = {
    count: counterReducer,
    hotStore,
    topListStore,
    controlStore,
}


//get the full state
//export const getWeatherState = (state: weatherReducer.WeatherState) => state;

//select the part of the state that you need
//using the createFeatureSelector and addind the name of the state slice
export const selectCountState = createFeatureSelector('count');

//get the state slices as needed
export const getCountStateData = createSelector(selectCountState, counterReducer);