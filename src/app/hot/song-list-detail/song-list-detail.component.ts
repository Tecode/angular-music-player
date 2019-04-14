import { Component, OnInit } from '@angular/core';
import { TweenLite } from 'gsap';
import { equipmentWidth } from '../../helpers/common';

@Component({
  selector: 'song-list-detail',
  templateUrl: './song-list-detail.component.html',
  styleUrls: ['./song-list-detail.component.less']
})
export class SongListDetailComponent implements OnInit {
  public fixedLeft: number = equipmentWidth().width;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(equipmentWidth().width);
    if (typeof window !== 'undefined') {
      TweenLite.to(".hot_detail_box", 0.6, { left: 0 });
    }
  }
}
