import { Component, OnInit, Input } from '@angular/core';
import { formatTime } from '../../helpers/common';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.less']
})
export class ListContentComponent implements OnInit {
  @Input() public data: any[] = new Array(20);

  constructor() { }

  ngOnInit() {
    console.log(this.data, '---------');
  }

  public modifyArray(data: any[]): string {
    return data.map(item => item.name).join('/');
  }

  public time(data: number): string {
    return formatTime(data / 1000);
  }

  public scrollFun(a) {
    console.log(a);
  }
}
