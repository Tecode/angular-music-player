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
  ngAfterContentInit() {
    this.update()
    window.addEventListener('resize', () => {
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

  ngOnDestroy() {
    if (this.slider) {
      this.slider.disable()
      clearTimeout(this.timer)
    }
  }

  public update(): void {
    if (this.slider) {
      this.slider.destroy()
    }
    this._init()
  }

  public refresh(): void {
    this._setSlideWidth(true)
    this.slider.refresh()
  }

  public prev(): void {
    this.slider.prev();
  }

  public next(): void {
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
    this.slider.on('scrollEnd', (): void => {
      this._onScrollEnd();
    })

    this.slider.on('touchEnd', (): void => {
      if (this.autoPlay) {
        this._play()
      }
    })

    this.slider.on('beforeScrollStart', (): void => {
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
    let pageIndex = this.slider.getCurrentPage().pageX;
    this.currentPageIndex = pageIndex;
    if (this.autoPlay) {
      this._play();
    };
  };

  private _setSlideWidth(isResize?: boolean | undefined): void {
    const { children } = this.slideGroup.nativeElement;
    const { clientWidth } = this.slide.nativeElement;
    const groupChildren = children[0].children;
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
    const { children } = this.slideGroup.nativeElement;
    this.dots = new Array(children[0].children.length);
  }

  private _play(): void {
    clearTimeout(this.timer)
    this.timer = <any>setTimeout(() => {
      this.slider.next();
    }, this.interval);
  }
}
