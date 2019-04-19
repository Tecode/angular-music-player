import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Position } from '../../common/scroll/scroll.component';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.less']
})
export class ListContentComponent implements OnInit {
  @Input() public data: any[] = new Array(20);
  @Output() public onScroll = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.data, '---------');
  }

  public modifyArray(data: any[]): string {
    return data.map(item => item.name).join('/');
  }

  public scrollFun(position: Position) {
    this.onScroll.emit(position);
  }
}
