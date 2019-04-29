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
  @Output() public onTap = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public modifyArray(data: any[]): string {
    return data.map(item => item.name).join('/');
  }

  public scrollFun(position: Position) {
    this.onScroll.emit(position);
  }

  public handlerTap(currentId: number, current: number): void {
    this.onTap.emit({ currentId, current });
  }
}
