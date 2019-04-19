import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ControlState } from '../../../store/reducers/control.reducer';
import { ChangeControlValue } from '../../../store';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

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
  public controlStore$: Observable<ControlState>;
  public data: ControlState;

  constructor(private store: Store<{ controlStore: ControlState }>) {
    this.controlStore$ = store.pipe(select('controlStore'));
  }

  ngOnInit() {
    this.controlStore$.subscribe(data => {
      this.data = data;
    });
  }

  public handlerPlayerList(visible: boolean): void {
    this.store.dispatch(new ChangeControlValue({ key: 'playListVisible', value: visible }));
  }

}
