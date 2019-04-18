import { Action } from '@ngrx/store';

export enum ControlActionTypes {
  ToggleSong = '[ Control ] ToggleSong',
  ToggleStatus = '[ Control ] ToggleStatus',
  PlayOrder = '[ Control ] PlayOrder',
  RestControlData = '[ Control ] RestControlData'
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



