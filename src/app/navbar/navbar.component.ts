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
      normalUrl: 'assets/imgs/navbar/icon_flash@2x.png',
      text: '热门',
      routerLink: '/hot',
      activeUrl: 'assets/imgs/navbar/icon_flash_active@2x.png',
      id: 10001
    },
    {
      normalUrl: 'assets/imgs/navbar/icon_music@2x.png',
      text: '列表',
      routerLink: '/list',
      activeUrl: 'assets/imgs/navbar/icon_music_active@2x.png',
      id: 10001
    },
    {
      normalUrl: 'assets/imgs/navbar/icon_search@2x.png',
      text: '搜索',
      routerLink: '/search',
      activeUrl: 'assets/imgs/navbar/icon_search_active@2x.png',
      id: 10001
    },
    {
      normalUrl: 'assets/imgs/navbar/icon_profile@2x.png',
      text: '我的',
      routerLink: '/profile',
      activeUrl: 'assets/imgs/navbar/icon_profile_active@2x.png',
      id: 10001
    },
  ];
  constructor() { }

  ngOnInit() {
    console.log(this, 'this');
  }

}
