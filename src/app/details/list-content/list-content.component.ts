import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.less']
})
export class ListContentComponent implements OnInit {
  public dataArr: Array<any> = new Array(20);

  constructor() { }

  ngOnInit() {
  }

}
