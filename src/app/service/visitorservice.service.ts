import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const apiKey = '1848b5465b1449d78d10c2991b1bea98';
const apiUrl =`https://newsapi.org/v2/everything?q=bitcoin&amp;from=2020-03-
     25&amp;sortBy=publishedAt&amp;`;

@Injectable({
  providedIn: 'root'
})
export class VisitorserviceService {

  constructor(private http: HttpClient) { }

  ngOnInit(){
  }

  addVisitor(visitor){
    let visitors = [];
    if(localStorage.getItem('Visitors')){    // here we check localstorage data if localstorage have data then using spread operator append new data to localstorage
      visitors = JSON.parse(localStorage.getItem('Visitors'));
      visitors = [visitor, ...visitors];
    }else{
      visitors = [visitor];  //if localstorage is empty
    }
    localStorage.setItem('Visitors', JSON.stringify(visitors)); // then here add data to localstorage
    return true;
  }

  getLatestNews(){
    console.log("this is nabil");
    const params = new HttpParams().append('apiKey', apiKey);
    return this.http.get(apiUrl, { params });
  }
}
