import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  public listVisible:boolean = false;
  public hotSearchVisible:boolean = true;
  /*
  DOM节点
  @params search
  this.search.nativeElement
  */
  // @ViewChild('search') search;

  constructor() { }

  ngOnInit() {
    // console.log(this.search.nativeElement);
  }

}
