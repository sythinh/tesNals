import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/api-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogList } from 'src/app/blog.model';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  listBlog: BlogList[] = [];
  page = 1;
  pageSize = 10;
  textSearch:string = ''
  totalItems: number = 0;
  constructor(
    private blogListService: ApiListService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.getAllListBlog();
  }

  ngOnInit(): void {
    this.loadPage(this.page);
  }

  loadPage(page: number) {
    this.blogListService.getListBlogPagintion(page, this.pageSize,this.textSearch).subscribe(data => {
      if (data) {
        this.listBlog = data;
      }
    });
  }

  getAllListBlog() {
    this.blogListService.getListAllBlog().subscribe(data => {
      if (data) {
        this.totalItems = data.length;
      }
    });
  }
  getSearch() {
    this.loadPage(this.page);
  }
  editList(id:number) {
    console.log("id",id);
     this.router.navigate(['../', id, 'edit'], {relativeTo: this.route});
  }

  detailList (id:number) {
    this.router.navigate(['../', id , 'detail'], {relativeTo: this.route});
  }
}


