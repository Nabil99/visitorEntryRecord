import { Component, OnInit } from '@angular/core';
import { VisitorserviceService } from '../service/visitorservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {
  latesNews: any;

  constructor(private _service:VisitorserviceService, private http:HttpClient) { }

  ngOnInit() {
    this.getLatestNews();
  }

  getLatestNews(){
    this._service.getLatestNews().subscribe(res => {
      console.log(res);
      this.latesNews = res['articles'];
      console.log(this.latesNews);
    });
  }


}
