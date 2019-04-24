import { Action } from '@ngrx/store';
import { ControlActionTypes } from '../actions';

export interface ControlAction extends Action {
  payload: any
}

/**
 * @param loading 是否在加载
 * @param status 播放还是暂停
 * @param playList 播放列表
 * @param miniPlayer 小窗播放,播放最小化
 * @param player 大窗播放
 * @param audio audi标签
 * @param playListVisible 播放列表可见
 * @param src 播放地址
 * @param coverUrl 封面
 * @param currentTime 当前播放时间
 * @param durationTime 总时长
 */

export interface ControlState {
  loading?: boolean;
  status: string,
  playList: any[],
  miniPlayer: boolean,
  player: boolean,
  audio?: HTMLAudioElement,
  playListVisible: boolean,
  src: string,
  coverUrl: string,
  currentTime: number,
  durationTime: number
}

export const initialState: ControlState = {
  loading: false,
  status: 'play',
  playList: [],
  miniPlayer: false,
  player: false,
  playListVisible: false,
  src: 'http://118.112.10.152/amobile.music.tc.qq.com/C400004R8CzL1Ax5UG.m4a?guid=4947587239&vkey=10296F0829BAF1A8ED625A3B05B422C1A405CB0B4AAEFA3F07F50332113F9160772A593254042BA66C3293528426766E8545080D60692F44&uin=1949&fromtag=66',
  coverUrl: '',
  currentTime: 0,
  durationTime: 252000
};



export function controlStore(state = initialState, action: ControlAction): ControlState {
  switch (action.type) {
    case ControlActionTypes.ToggleSong:
      console.log(action);
      return { ...state };

    case ControlActionTypes.ToggleStatus:
      console.log(action);
      return { ...state };

    case ControlActionTypes.RestControlData:
      console.log(action);
      return { ...state };

    case ControlActionTypes.ChangeValue:
      console.log(action);
      statusHandler(state, action.payload.key, action.payload.value);
      return { ...state, [action.payload.key]: action.payload.value };

    default:
      return state;
  }
}

const statusHandler = (state: ControlState, key: string, value: any): void => {
  console.log(state.audio);
};