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
      text: '推荐',
      routerLink: '/hot',
      id: 10001
    },
    {
      text: '排行',
      routerLink: '/list',
      id: 10001
    },
    {
      text: '搜索',
      routerLink: '/search',
      id: 10001
    }
  ];
  constructor() { }

  ngOnInit() {
    console.log(this, 'this');
  }

}
