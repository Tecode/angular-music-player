import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class HotService {
  private params: HttpParams = new HttpParams();

  constructor(private http: HttpClient) {
    this.params = this.params.append('_', (new Date()).getTime().toString());
    this.params = this.params.append('g_tk', '5381');
    this.params = this.params.append('uin', 'utf-8');
    this.params = this.params.append('format', 'json');
    this.params = this.params.append('inCharset', 'utf-8');
    this.params = this.params.append('outCharset', 'utf-8');
    this.params = this.params.append('notice', '0');
    this.params = this.params.append('platform', 'h5');
    this.params = this.params.append('needNewCode', '1');
  }

  // 热门歌单推荐
  popularList() {
    return this.http.get('/api/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg?picmid=1&rnd=0.38439517964822434&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&categoryId=10000000&sortId=5&sin=0&ein=19');
  }

  // 轮播图
  loopList() {
    return this.http.get('/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', { params: this.params });
  }
}