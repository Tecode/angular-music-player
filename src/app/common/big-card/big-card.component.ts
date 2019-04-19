import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.less']
})
export class BigCardComponent implements OnInit {
  @Input() picUrl: string = '';
  @Input() name: string = '';
  @Input() id: number = 0;
  @Input() singer: string = '';
  @Input() durationTime: number = 0;
  @Input() rank:number;

  constructor() { }

  ngOnInit() {
  }

}
