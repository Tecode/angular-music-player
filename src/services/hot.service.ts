import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  export class HotService {
    constructor (private http: HttpClient) {}
  
    loadData() {
      return this.http.get('/api/v8/fcg-bin/fcg_myqq_toplist.fcg?_=1554984263230&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1');
    }
  }