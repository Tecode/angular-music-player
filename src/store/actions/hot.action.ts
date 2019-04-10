import { Action } from '@ngrx/store';

export enum HotActionTypes {
    LoadData = '[Hot Page] Load Data',
    LoadSuccess = '[Hot API] Data Loaded Success',
    LoadError = '[Hot Page] Load Error',
}

//  获取数据
export class LoadHotData implements Action {
    readonly type = HotActionTypes.LoadData;
}

export class LoadSuccess implements Action {
    readonly type = HotActionTypes.LoadSuccess;
}

export class LoadError implements Action {
    readonly type = HotActionTypes.LoadError;
    constructor(public data: any){}
}