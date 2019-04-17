import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.less']
})
export class ListContentComponent implements OnInit {
  @Input() public data: any[] = new Array(20);

  constructor() { }

  ngOnInit() {
    console.log(this.data, '---------')
  }

}
