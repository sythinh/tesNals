import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiListService } from 'src/app/api-list.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-detail-edit.component.html',
  styleUrls: ['./blog-detail-edit.component.css']
})
export class BlogDetailEditComponent implements OnInit {
  title:string = '';
  image:String = '';
  content:string = '';
  isEdit: boolean = true;
  show: boolean = false;
  id:string = '';
  constructor(
    private route: ActivatedRoute,
    private blogListService: ApiListService,
    private _location: Location
  ) { }

  ngOnInit(): void {
    this.loadBlogEdit();
    this.route.url.subscribe(params => {
      if (params[1].path =="detail") {
        this.isEdit = false;
      } else {
        this.isEdit = true;
      }
    });
  }
  loadBlogEdit() {
    this.route.params.subscribe(params  => {
       this.id = params['id'];
      console.log("id edit",params); 
      this.blogListService.getDetailList(this.id).subscribe(data => {
        this.title = data.title;
        this.image = data.image ;
        this.content = data.content;
      })
    
    });
  }
  onSubmit() {
    let data = {
        id : parseInt(this.id),
        title: this.title,
        content: this.content,
        image:this.image
    };
    this.blogListService.editBlog(this.id,data).subscribe(res => {
      if(res) {
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, 2000);
      }
    })
  }
  back () {
    this._location.back();
  }
}
interface BlogList {
  id: number;
  title?: string
  image?: String;
  content?: string;
  createdAt:string
}