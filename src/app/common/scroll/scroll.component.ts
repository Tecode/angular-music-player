import { Component, OnInit, ElementRef, Input, ViewChild, Output, SimpleChanges, EventEmitter } from '@angular/core';
import BScroll from 'better-scroll';
import { getRect } from '../../helpers/common';

type PullDownRefresh = {
  txt?: string,
  stop?: number,
  stopTime?: number
}

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.less']
})
export class ScrollComponent implements OnInit {
  public scroll: BScroll;
  public beforePullDown: boolean = true;
  public isRebounding: boolean = false;
  public isPullingDown: boolean = false;
  public isPullUpLoad: boolean = false
  public pullUpDirty: boolean = true;
  public pullDownStyle: string = '';
  public bubbleY: number = 0;
  public pullDownInitTop: number = -50;

  @Input() public probeType: number = 1;
  @Input() public click: boolean = true;
  @Input() public listenScroll: boolean = true;
  @Input() public listenBeforeScroll: boolean = false;
  @Input() public listenScrollEnd: boolean = false;
  @Input() public direction: string = 'vertical';
  @Input() public scrollBar: boolean = false;
  @Input() public pullDownRefresh: PullDownRefresh = null;
  @Input() public pullUpLoad: boolean = false;
  @Input() public startY: number = 0;
  @Input() public refreshDelay: number = 20;
  @Input() public freeScroll: boolean = false;
  @Input() public mouseWheel: boolean = false;
  @Input() public bounce: boolean = true;
  @Input() public zoom: boolean = false;

  @Input() public pullUp: boolean = false;
  @Input() public beforeScroll: boolean = false;
  @Input() public scrollY: boolean = true;
  @Input() public scrollX: boolean = false;

  @Output() public scrollFun = new EventEmitter();
  @Output() public scrollEndFun: Function = () => { };
  @Output() public beforeScrollFun: Function = () => { };
  @Output() public scrollStartFun: Function = () => { };
  @Output() public pullingDownFun: Function = () => { };
  @Output() public pullingUpFun: Function = () => { };

  @ViewChild('scrollContent') scrollContent: ElementRef;

  constructor(private element: ElementRef) { }

  ngOnInit() { }
  ngAfterContentInit() {
    if (typeof window != 'undefined') {
      setTimeout(() => {
        this._initScroll();
      }, 20)
    }
  }
  // ngOnChanges(change: SimpleChanges) {
  //   console.log(change, '发生了改变');
  //   setTimeout(() => {
  //     this.refresh();
  //   }, this.refreshDelay)
  // }

  // 初始化滚动函数
  private _initScroll(): void {
    const scrollContent = this.scrollContent.nativeElement;
    console.log(scrollContent);
    if (!scrollContent) {
      return;
    }

    const options = {
      probeType: this.probeType,
      click: this.click,
      // scrollY: this.freeScroll || this.direction === 'vertical',
      // scrollX: this.freeScroll || this.direction === 'horizontal',
      // scrollbar: this.scrollBar,
      // pullDownRefresh: this.pullDownRefresh,
      // pullUpLoad: this.pullUpLoad,
      // startY: this.startY,
      // freeScroll: this.freeScroll,
      // mouseWheel: this.mouseWheel,
      // bounce: this.bounce,
      // zoom: this.zoom
    }
    this.scroll = new BScroll(scrollContent, options);

    // if (this.listenScroll) {
    //   this.scroll.on('scroll', (pos) => {
    //     console.log('4444')
    //     this.scrollFun.emit(pos);
    //   })
    // }

    // if (this.listenScrollEnd) {
    //   this.scroll.on('scrollEnd', (pos) => {
    //     this.scrollEndFun(pos);
    //   })
    // }

    // if (this.listenBeforeScroll) {
    //   this.scroll.on('beforeScrollStart', () => {
    //     this.beforeScrollFun();
    //   })

    //   this.scroll.on('scrollStart', () => {
    //     this.scrollStartFun();
    //   })
    // }

    // if (this.pullDownRefresh) {
    //   this._initPullDownRefresh();
    // }

    // if (this.pullUpLoad) {
    //   this._initPullUpLoad();
    // }
  }

  // private _initPullDownRefresh(): void {
  //   this.scroll.on('pullingDown', () => {
  //     this.beforePullDown = false;
  //     this.isPullingDown = true;
  //     this.pullingDownFun('pullingDown');
  //   })

  //   this.scroll.on('scroll', (pos) => {
  //     if (!this.pullDownRefresh) {
  //       return
  //     }
  //     if (this.beforePullDown) {
  //       this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop);
  //       this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`;
  //     } else {
  //       this.bubbleY = 0;
  //     }

  //     if (this.isRebounding) {
  //       this.pullDownStyle = `top:${10 - (this.pullDownRefresh.stop - pos.y)}px`;
  //     }
  //   })
  // }

  public disable(): void {
    this.scroll && this.scroll.disable();
  }

  public enable(): void {
    this.scroll && this.scroll.enable();
  }

  public refresh(): void {
    this.scroll && this.scroll.refresh();
  }

  public scrollTo(): void {
    this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
  }

  public autoPullDownRefresh(): void {
    this.scroll && this.scroll.autoPullDownRefresh();
  }

  public scrollToElement(): void {
    this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
  }

  public clickItem(e, item): void {
    console.log(e, item);
  }

  public destroy(): void {
    this.scroll.destroy()
  }

  // public forceUpdate(dirty): void {
  //   if (this.pullDownRefresh && this.isPullingDown) {
  //     this.isPullingDown = false
  //     this._reboundPullDown().then(() => {
  //       this._afterPullDown()
  //     })
  //   } else if (this.pullUpLoad && this.isPullUpLoad) {
  //     this.isPullUpLoad = false
  //     this.scroll.finishPullUp()
  //     this.pullUpDirty = dirty
  //     this.refresh()
  //   } else {
  //     this.refresh()
  //   }
  // }

  // private _initPullUpLoad() {
  //   this.scroll.on('pullingUp', () => {
  //     this.isPullUpLoad = true;
  //     this.pullingUpFun();
  //   })
  // }

  // private _reboundPullDown(): Promise<{}> {
  //   const { stopTime = 600 } = this.pullDownRefresh
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       this.isRebounding = true
  //       this.scroll.finishPullDown()
  //       resolve()
  //     }, stopTime)
  //   })
  // }

  // private _afterPullDown(): void {
  //   setTimeout(() => {
  //     this.pullDownStyle = `top:${this.pullDownInitTop}px`
  //     this.beforePullDown = true
  //     this.isRebounding = false
  //     this.refresh()
  //   }, this.scroll.options.bounceTime)
  // }

}
