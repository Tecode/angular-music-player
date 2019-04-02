import { Component, OnInit, ElementRef, Input } from '@angular/core';
import BScroll from 'better-scroll'

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.less']
})
export class ScrollComponent implements OnInit {
  @Input() public probeType: number = 1;
  @Input() public click: boolean = true;
  @Input() public listenScroll: boolean = false;
  @Input() public pullUp: boolean = false;
  @Input() public beforeScroll: boolean = false;
  @Input() public scrollY: boolean = true;
  @Input() public scrollX: boolean = false


  public scroll: BScroll;
  constructor(private element: ElementRef) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.scroll = new BScroll(this.element.nativeElement.querySelector('div'), {
      probeType: this.probeType,
      click: this.click,
      scrollX: this.scrollX,
      scrollY: this.scrollY,
      eventPassthrough: this.scrollX ? 'vertical' : false
    })
  }

  // 初始化滚动函数
  initScroll() {
    if (!this.element.nativeElement) {
      return
    }



    // 派发监听滚动位置事件
    if (this.listenScroll) {
      let me = this
      this.scroll.on('scroll', (pos) => {
        // 向父组件传值
        console.log('滚动前是否触发事件');
      })
    }

    // 派发上拉刷新时间
    if (this.pullUp) {
      this.scroll.on('scrollEnd', () => {
        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
          // 滑动到底部了
          console.log('滚动前是否触发事件');
        }
      })
    }

    // 滚动前是否触发事件
    if (this.beforeScroll) {
      this.scroll.on('beforeScrollStart', () => {
        console.log('滚动前是否触发事件');
      })
    }
  }

}
