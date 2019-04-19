import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlState } from '../../store/reducers/control.reducer';
import { Store, select } from '@ngrx/store';
import { ChangeControlValue } from '../../store';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.less']
})
export class ControlComponent implements OnInit {
  @ViewChild('audioElement') public audioElement: ElementRef;

  private controlStore$: Observable<ControlState>;
  public data: ControlState;

  constructor(private store: Store<{ controlStore: ControlState }>) {
    this.controlStore$ = store.pipe(select('controlStore'))
  }

  ngOnInit() {
    this.controlStore$.subscribe(data => {
      this.data = data;
      console.log(data);
    })
  }

  ngAfterViewInit(): void {
    const audio = this.audioElement.nativeElement;
    // 获取audio标签
    this.store.dispatch(new ChangeControlValue({ key: 'audio', value: audio }));
    // 加载完成
    audio.addEventListener('canplay', () => {
      console.log('可以播放');
    }, false);
    // 是否在播放
    audio.addEventListener('play', () => {
      console.log('播放');
    }, false);
    // 是否暂停
    audio.addEventListener('pause', () => {
      console.log('暂停');
    }, false);
    // 播放结束
    audio.addEventListener('ended', () => {
      console.log('播放结束');
    }, false);
  }

  public handlerPlayerList(visible: boolean): void {
    this.store.dispatch(new ChangeControlValue({ key: 'playListVisible', value: visible }));
  }

  public handlerPlay(): void {
    const { audio, status } = this.data;
    const newStatus = status == 'pause' ? 'play' : 'pause';
    if (status == 'play') {
      audio.play();
    }
    if (status == 'pause') {
      audio.pause();
    }
    this.store.dispatch(new ChangeControlValue({ key: 'status', value: newStatus }));
  }

  // 展示出播放控制器
  public handlerVisible(visible: boolean) {
    this.store.dispatch(new ChangeControlValue({ key: 'player', value: visible }));
  }
}
