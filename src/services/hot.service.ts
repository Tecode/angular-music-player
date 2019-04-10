import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  export class HotService {
    constructor (private http: HttpClient) {}
  
    loadData() {
      return this.http.get('http://admin.soscoon.com/api/article?index=1&size=10');
    }
  }