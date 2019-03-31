import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.less']
})
export class HeadlineComponent implements OnInit {
  @Input() title:string;
  @Input() color:boolean;
  @Input() size: number;

  constructor() { }

  ngOnInit() {
  }

}
