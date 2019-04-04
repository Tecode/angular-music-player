import { Component, OnInit, ElementRef, Input, ViewChild, Renderer2 } from '@angular/core';
import BScroll from 'better-scroll';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.less']
})
export class SliderComponent implements OnInit {
  public slider: BScroll;
  public dots: Array<any> = [];
  public currentPageIndex: number = 0;
  public timer: number;
  private resizeTimer: number;

  @Input() public loop: boolean = true;
  @Input() public autoPlay: boolean = true;
  @Input() public interval: number = 4000;
  @Input() public showDot: boolean = true;
  @Input() public click: boolean = true;
  @Input() public threshold: number = 0.3;
  @Input() public speed: number = 400;
  @ViewChild('slide') public slide: ElementRef;
  @ViewChild('slideGroup') public slideGroup: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() { }
  ngAfterViewInit() {
    this.update()
    window.addEventListener('resize', () => {
      console.log(this.slider, '---+++=');
      if (!this.slider || !this.slider.enabled) {
        return
      }
      clearTimeout(this.resizeTimer)
      this.resizeTimer = <any>setTimeout(() => {
        if (this.slider.isInTransition) {
          this._onScrollEnd()
        } else {
          if (this.autoPlay) {
            this._play()
          }
        }
        this.refresh()
      }, 60)
    })
  }

  update() {
    if (this.slider) {
      this.slider.destroy()
    }
    this._init()
  }

  refresh() {
    this._setSlideWidth(true)
    this.slider.refresh()
  }

  prev() {
    this.slider.prev();
  }

  next() {
    this.slider.next()
  }

  private _initSlide(): void {
    this.slider = new BScroll(this.slideGroup.nativeElement, {
      scrollX: true,
      scrollY: false,
      momentum: false,
      snap: {
        loop: this.loop,
        threshold: this.threshold,
        speed: this.speed
      },
      bounce: false,
      stopPropagation: true,
      click: this.click
    });

    this.slider.on('scrollEnd', this._onScrollEnd)

    this.slider.on('touchEnd', () => {
      if (this.autoPlay) {
        this._play()
      }
    })

    this.slider.on('beforeScrollStart', () => {
      if (this.autoPlay) {
        clearTimeout(this.timer)
      }
    })
  }

  private _init(): void {
    clearTimeout(this.timer)
    this.currentPageIndex = 0
    this._setSlideWidth();
    if (this.showDot) {
      this._initDots()
    }
    this._initSlide()

    if (this.autoPlay) {
      this._play()
    }
  }

  private _onScrollEnd(): void {
    console.log(this.slider);
    let pageIndex = this.slider.getCurrentPage().pageX;
    this.currentPageIndex = pageIndex;
    if (this.autoPlay) {
      this._play();
    }
  }

  private _setSlideWidth(isResize?: boolean | undefined): void {
    console.log(this.slider, '------------');
    const { children } = this.slideGroup.nativeElement;
    const { clientWidth } = this.slide.nativeElement;
    const groupChildren = children[0].children;
    console.log(this.slide.nativeElement.clientWidth);
    let width = 0;
    let slideWidth = clientWidth;
    for (let i = 0; i < groupChildren.length; i++) {
      this.renderer.setStyle(groupChildren[i], 'width', slideWidth + 'px');
      width += slideWidth
    }
    if (this.loop && !isResize) {
      width += 2 * slideWidth
    }
    this.renderer.setStyle(this.slideGroup.nativeElement.children[0], 'width', width + 'px');
  }

  private _initDots(): void {
    this.dots = new Array(this.slideGroup.nativeElement.childElementCount)
  }

  private _play(): void {
    clearTimeout(this.timer)
    this.timer = <any>setTimeout(() => {
      this.slider.next()
    }, this.interval)
  }
}
