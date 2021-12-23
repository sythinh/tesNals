import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './blog/blog/blog.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { ApiListService } from './api-list.service';
import { BlogDetailEditComponent } from './blog/detail-edit/blog-detail-edit.component';
import { BlogNewComponent } from './blog/blog-new/blog-new.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogDetailEditComponent,
    BlogNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
