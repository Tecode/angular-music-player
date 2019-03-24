import { Component, OnInit } from '@angular/core';
import { NavBarIcon } from 'src/interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  iconArr: NavBarIcon[] = [
    {
      iconUrl: 'assets/imgs/navbar/icon_browse@2x.png',
      text: '浏览'
    },
    {
      iconUrl: 'assets/imgs/navbar/icon_radio@2x.png',
      text: '个性电台'
    },
    {
      iconUrl: 'assets/imgs/navbar/icon_liked@2x.png',
      text: '喜欢'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
