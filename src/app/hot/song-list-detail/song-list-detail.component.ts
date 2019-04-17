import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { equipmentWidth } from '../../helpers/common';
import { Router } from '@angular/router';


@Component({
  selector: 'song-list-detail',
  templateUrl: './song-list-detail.component.html',
  styleUrls: ['./song-list-detail.component.less'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [
        style({ transform: 'translateY(100%)' }),
        animate('300ms ease-out')
      ]),
      transition('* => void', [
        style({ transform: 'translateY(0)' }),
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class SongListDetailComponent implements OnInit {
  public fixedLeft: number = equipmentWidth().width;

  constructor(public router: Router) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  public goBack(): void {
    this.router.navigate(['/hot']);
  }
}
