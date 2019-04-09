import { Component, OnInit } from '@angular/core';
import { NavBarIcon } from '../../interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  iconArr: NavBarIcon[] = [
    {
      iconUrl: 'assets/imgs/navbar/icon_browse@2x.png',
      text: '浏览',
      routerLink: '/6'
    },
    {
      iconUrl: 'assets/imgs/navbar/icon_radio@2x.png',
      text: '个性电台',
      routerLink: '/5'
    },
    {
      iconUrl: 'assets/imgs/navbar/icon_liked@2x.png',
      text: '微笑',
      routerLink: '/smile'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
