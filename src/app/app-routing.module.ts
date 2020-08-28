import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorLogListComponent } from './visitor-log-list/visitor-log-list.component';


const routes: Routes = [
  {
    path:'', component:AddVisitorComponent
  },
  {
    path:'addVisitor', component:AddVisitorComponent
  },
  {
    path:'visitorList', component:VisitorLogListComponent
  },
  {
    path:'latestNews', component:LatestNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
