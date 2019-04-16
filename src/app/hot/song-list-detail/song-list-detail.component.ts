import { Component, OnInit, ElementRef } from '@angular/core';
import { TweenLite } from 'gsap';
import { equipmentWidth } from '../../helpers/common';

@Component({
  selector: 'song-list-detail',
  templateUrl: './song-list-detail.component.html',
  styleUrls: ['./song-list-detail.component.less']
})
export class SongListDetailComponent implements OnInit {
  public fixedLeft: number = equipmentWidth().width;

  constructor(private scrollEl:ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(equipmentWidth().width);
    if (typeof window !== 'undefined') {
      console.log(this.scrollEl.nativeElement.children[0]);
      TweenLite.to(this.scrollEl.nativeElement.children[0], 0.1, { left: 0 })
      .eventCallback('onComplete', () => {
        console.log('完成');
      })
    }
  }

  public goBack():void {
    console.log(4)
  }
}
