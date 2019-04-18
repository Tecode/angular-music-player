import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-drawer-list',
  templateUrl: './drawer-list.component.html',
  styleUrls: ['./drawer-list.component.less'],
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
export class DrawerListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
