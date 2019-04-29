import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  // 热搜
  hotKeyWorlds() {
    return this.http.get('/api/search/hot');
  }

  // 搜索
  searchResult(value: string) {
    return this.http.get(`/search?keywords=${value}`);
  }
}