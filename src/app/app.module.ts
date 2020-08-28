import { VisitorserviceService } from './service/visitorservice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';

import { VisitorLogListComponent } from './visitor-log-list/visitor-log-list.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { AddVisitorComponent } from './add-visitor/add-visitor.component';




@NgModule({
  declarations: [
    AppComponent,
    VisitorLogListComponent,
    LatestNewsComponent,
    AddVisitorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [VisitorserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
