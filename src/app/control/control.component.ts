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
  @ViewChild('audioElement') private audioElement: ElementRef;
  @ViewChild('progressBarElement') private progressBarElement: ElementRef;

  private controlStore$: Observable<ControlState>;
  public data: ControlState;
  private interval$: any;
  private startX: number = 0;
  public currentLineWidth: number = 0;
  private startWidth: number = 0;
  // 进度条的长度,初始化为
  public barWidth: number = 0;
  private static BTN_WIDTH: number = 16;


  constructor(private store: Store<{ controlStore: ControlState }>) {
    this.controlStore$ = store.pipe(select('controlStore'))
  }

  ngOnInit() {
    this.barWidth = this.progressBarElement.nativeElement.clientWidth;
    this.controlStore$.subscribe(data => {
      this.currentLineWidth = (data.currentTime / data.durationTime) * this.barWidth;
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
      // 检测到可以播放就直接开始播放
      this.data.audio.play();
    }, false);
    // 是否在播放，开始定时器
    audio.addEventListener('play', () => {
      const timeNumber: Observable<number> = interval(500);
      this.interval$ = timeNumber.pipe().subscribe(() => {
        // 获取当前播放时间
        this.store.dispatch(new ChangeControlValue({ key: 'currentTime', value: Math.floor(this.data.audio.currentTime * 1000) }));
      });
      this.store.dispatch(new ChangeControlValue({ key: 'status', value: 'pause' }));
    }, false);
    // 是否暂停，暂停定时器
    audio.addEventListener('pause', () => {
      this.interval$.unsubscribe();
      this.store.dispatch(new ChangeControlValue({ key: 'status', value: 'play' }));
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

  // 按下滑块
  public handlerPanstart(data: any) {
    // 暂停定时器
    if (this.interval$) {
      this.interval$.unsubscribe();
    }
    this.startX = data.center.x;
    this.startWidth = this.currentLineWidth;
  }

  // 放开滑块
  public handlerPanend(data?: any) {
    this.percentChange(true);
  }

  // 滑动进度条
  public handlerPanmove(data: any) {
    // 滑动的差值
    const deltaX = data.center.x - this.startX;
    // 进度条的差值，大于0，小于总长度
    /**
     * @param this.barWidth 进度条总长度
     * @param ControlComponent.BTN_WIDTH 可点击区域宽度16
     * @param this.startWidth 绿色进度条的长度
     * @param deltaX 开始拖动的位置-拖动的距离
     */
    const offsetWidth = Math.min(this.barWidth - ControlComponent.BTN_WIDTH, Math.max(0, this.startWidth + deltaX));
    this.currentLineWidth = offsetWidth;
  }

  // 点击进度条
  public handlerTap(data: any) {
    const touchLeft = this.progressBarElement.nativeElement.getBoundingClientRect().left;
    // const newWidth 
    this.currentLineWidth = Math.min(this.barWidth - ControlComponent.BTN_WIDTH, Math.max(0, data.center.x - touchLeft));
    this.percentChange();
  }

  // 进度条改变
  private percentChange(swipe?: boolean) {
    const currentTime = this.data.durationTime * (this.currentLineWidth / this.barWidth);
    console.log(currentTime, '----------currentTime');
    this.store.dispatch(new ChangeControlValue({ key: 'currentTime', value: currentTime }));
    this.data.audio.currentTime = Math.floor(currentTime / 1000);
    this.data.audio.play();
  }

}
