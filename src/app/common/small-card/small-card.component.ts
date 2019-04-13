import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.less']
})
export class SmallCardComponent implements OnInit {
  @Input() picUrl: string = '';
  @Input() name: string = '';
  @Input() copywriter: string = '';

  constructor() { }

  ngOnInit() {
  }

}
