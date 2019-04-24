import { Action } from '@ngrx/store';

export enum TopListActionTypes {
    LoadData = '[TopList Page] Load Data',
    LoadSuccess = '[TopList API] Data Loaded Success',
    LoadError = '[TopList Page] Load Error',
    ChangeValue = '[Hot Page] ChangeValue'
}

//  获取数据
export class LoadTopListData implements Action {
    readonly type = TopListActionTypes.LoadData;
}

export class LoadTopListSuccess implements Action {
    readonly type = TopListActionTypes.LoadSuccess;
}

export class LoadTopListError implements Action {
    readonly type = TopListActionTypes.LoadError;
    constructor(public data: any) { }
}

export class ChangeTopListValue implements Action {
    readonly type = TopListActionTypes.ChangeValue;
    constructor(public payload: { key: string; value: any }) { }
}