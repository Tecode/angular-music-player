import { Action } from '@ngrx/store';

export enum HotActionTypes {
    LoadData = '[Hot API] Load Data',
    LoadSuccess = '[Hot API] Data Loaded Success',
    LoadError = '[Hot API] Load Error',
    LoadSongListData = '[Hot API] Load Song List',
    LoadSongListSuccess = '[Hot API] Song List Data Loaded Success',
    LoadSongListError = '[Hot API] Song List Data Loaded Error',
    ChangeValue = '[Hot Page] ChangeValue'
}

//  获取热门推荐数据
export class LoadHotData implements Action {
    readonly type = HotActionTypes.LoadData;
}

export class LoadSuccess implements Action {
    readonly type = HotActionTypes.LoadSuccess;
}

export class LoadError implements Action {
    readonly type = HotActionTypes.LoadError;
    constructor(public data: any) { }
}

// 获取歌单详情数据
export class LoadSongListData implements Action {
    readonly type = HotActionTypes.LoadSongListData;
    constructor(public id: number) { }
}

export class LoadSongListSuccess implements Action {
    readonly type = HotActionTypes.LoadSongListSuccess;
}

export class LoadSongListError implements Action {
    readonly type = HotActionTypes.LoadSongListError;
    constructor(public data: any) { }
}

export class ChangeHotValue implements Action {
    readonly type = HotActionTypes.ChangeValue;
    constructor(public payload: { key: string; value: any }) { }
  }