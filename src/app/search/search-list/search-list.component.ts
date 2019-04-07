import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.less']
})
export class SearchListComponent implements OnInit {
  @Input() singer: boolean = true;
  public singerImageUrl: string = 'https://y.gtimg.cn/music/photo_new/T001R68x68M000003hP1b82zqCtm.jpg?max_age=2592000';
  public songImageUrl: string = '/assets/imgs/icon/icon_qq_music.svg'
  constructor() { }

  ngOnInit() {
  }

}
