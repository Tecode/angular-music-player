import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.less']
})
export class ScrollComponent implements OnInit {
  @ViewChild('scroll') public scroll: any;
  @Input() public data: object;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log(this, '---------------');
  }

}
