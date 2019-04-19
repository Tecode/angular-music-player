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
  miniPlayer: true,
  player: false,
  playListVisible: false,
  src: 'http://m10.music.126.net/20190419173832/05bfe23396ae268f9e433102267d8285/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3',
  coverUrl: '',
  currentTime: 26,
  durationTime: 269590
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