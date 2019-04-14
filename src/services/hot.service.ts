import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class HotService {

  constructor(private http: HttpClient) {
  }

  // 热门歌单推荐
  popularList() {
    return this.http.get('/api/personalized');
  }

  // 轮播图
  loopList() {
    return this.http.get('/api/banner');
  }
}