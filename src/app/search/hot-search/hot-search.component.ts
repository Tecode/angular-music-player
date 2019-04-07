import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hot-search',
  templateUrl: './hot-search.component.html',
  styleUrls: ['./hot-search.component.less']
})
export class HotSearchComponent implements OnInit {
  @Input() visible: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
