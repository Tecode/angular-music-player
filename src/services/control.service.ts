import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  constructor(private http: HttpClient) {
  }

  // 热门歌单推荐
  songUrl(data) {
    return this.http.get(`/api/song/url?id=${data.id}`);
  }
}
