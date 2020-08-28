import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visitor-log-list',
  templateUrl: './visitor-log-list.component.html',
  styleUrls: ['./visitor-log-list.component.css']
})
export class VisitorLogListComponent implements OnInit {
local: any = [];
local1: any;
  constructor() { }

  ngOnInit() {
    this.local = localStorage.getItem('Visitors')
     this.local1 = JSON.parse(this.local);
     console.log(this.local1);
  }
}
