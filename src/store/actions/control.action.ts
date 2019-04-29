import { Action } from '@ngrx/store';

export enum ControlActionTypes {
  ToggleSong = '[ Control ] ToggleSong',
  ToggleStatus = '[ Control ] ToggleStatus',
  PlayOrder = '[ Control ] PlayOrder',
  RestControlData = '[ Control ] RestControlData',
  ChangeValue = '[ Control ] ChangeValue',
  LoadSongUrl = '[ Control ] LoadSongUrl',
  LoadSongUrlSuccess = '[ Control ] LoadSongUrlSuccess',
  ControlError = '[ Control ] ControlError',
}

// 上一曲下一曲
export class ToggleSong implements Action {
  readonly type = ControlActionTypes.ToggleSong;
  constructor(public data: any) { }
}

// 播放暂停
export class ToggleStatus implements Action {
  readonly type = ControlActionTypes.ToggleStatus;
  constructor(public data: any) { }
}

// 顺序播放或单曲循环
export class PlayOrder implements Action {
  readonly type = ControlActionTypes.PlayOrder;
  constructor(public data: any) { }
}

// 重置数据
export class RestControlData implements Action {
  readonly type = ControlActionTypes.RestControlData;
}

// 设置数据
export class ChangeControlValue implements Action {
  readonly type = ControlActionTypes.ChangeValue;
  constructor(public payload: { key: string; value: any }) { }
}

// 获取音乐播放地址
export class LoadSongUrl implements Action {
  readonly type = ControlActionTypes.LoadSongUrl;
  constructor(public id: number) { }
}

// 获取音乐播放地址成功
export class LoadSongUrlSuccess implements Action {
  readonly type = ControlActionTypes.LoadSongUrlSuccess;
  constructor(public payload: { key: string; value: any }) { }
}

// 获取出错

export class ControlError implements Action {
  readonly type = ControlActionTypes.ControlError;
  constructor(public payload: { key: string; value: any }) { }
}