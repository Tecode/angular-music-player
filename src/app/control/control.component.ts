import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlStateData } from '../../store/reducers/control.reducer';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.less']
})
export class ControlComponent implements OnInit {
  @ViewChild('audioElement') public audioElement: ElementRef;

  private controlStore$: Observable<ControlStateData>;

  constructor(private store: Store<{ controlStore: ControlStateData }>) {
    this.controlStore$ = store.pipe(select('controlStore'))
  }

  ngOnInit() {
    this.controlStore$.subscribe(data => {
      console.log(data);
    })
  }

  public handlerPlayerList(): void {
    console.log(44);
  }

}
