import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.less']
})
export class HeadlineComponent implements OnInit {
  @Input() public title: string;
  @Input() public color: boolean;
  @Input() public size: number;

  constructor() { }

  ngOnInit() {
  }

}
