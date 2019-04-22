import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { trigger, state, animate, transition, style } from '@angular/animations';
import { Store, select } from '@ngrx/store';
import { ChangeControlValue } from '../../store';
import { ControlState } from '../../store/reducers/control.reducer';


@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.less'],
  animations: [
    trigger('childAnimation', [
      state('sideUp', style({
        opacity: 1,
        transform: 'translateY(0)',
      })),
      state('sideDown', style({
        opacity: 0,
        transform: 'translateY(100%)',
      })),
      transition('* => *', [
        animate('300ms ease-in-out')
      ]),
    ])
  ]
})
export class ControlComponent implements OnInit {
  @ViewChild('audioElement') public audioElement: ElementRef;
  @ViewChild('progressBarElement') public progressBarElement: ElementRef;

  private controlStore$: Observable<ControlState>;
  public data: ControlState;
  private interval$: any;
  public currentLineWidth: number = 0;

  constructor(private store: Store<{ controlStore: ControlState }>) {
    this.controlStore$ = store.pipe(select('controlStore'))
  }

  ngOnInit() {
    const barWidth: number = this.progressBarElement.nativeElement.clientWidth;
    this.controlStore$.subscribe(data => {
      this.currentLineWidth = (data.currentTime / data.durationTime) * barWidth;
      this.data = data;
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
    // 是否在播放，开始定时器
    audio.addEventListener('play', () => {
      const timeNumber: Observable<number> = interval(500);
      this.interval$ = timeNumber.pipe().subscribe(() => {
        // 获取当前播放时间
        this.store.dispatch(new ChangeControlValue({ key: 'currentTime', value: Math.floor(this.data.audio.currentTime * 1000) }));
      });
      console.log('播放');
    }, false);
    // 是否暂停，暂停定时器
    audio.addEventListener('pause', () => {
      this.interval$.unsubscribe();
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
    console.log(visible, '-------------->>');
    this.store.dispatch(new ChangeControlValue({ key: 'player', value: visible }));
  }

  // 按下滑块
  public handlerPanstart(data: any) {
    console.log(data, '开始>>>');
  }

  // 放开滑块
  public handlerPanend(data: any) {
    console.log(data, '结束>>>');
  }

  // 滑动进度条
  public handlerPanmove(data: any) {
    this.currentLineWidth = data.deltaX;
    console.log(data.deltaX);
  }
}
