import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'song-list-detail',
  templateUrl: './song-list-detail.component.html',
  styleUrls: ['./song-list-detail.component.less']
})
export class SongListDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(document.getElementsByClassName('nav_bar'))
  }
}
