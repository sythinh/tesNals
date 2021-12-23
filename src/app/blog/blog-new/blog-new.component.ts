import { Component, OnInit } from '@angular/core';
import { ApiListService } from 'src/app/api-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.css']
})
export class BlogNewComponent implements OnInit {
  title:string = '';
  image:String = '';
  content:string = '';
  isEdit: boolean = true;
  show: boolean = false;
  constructor(
    private blogListService: ApiListService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }
  onSubmit() {
    const data = {
      title: this.title,
      image: this.image,
      content: this.content
    }
    this.blogListService.addNewBlog(data).subscribe(res => {
      if (res) {
        this.show = true;
        setTimeout(() => {
          this.show = false;
          this.router.navigateByUrl('/blog');
        }, 5000);
        
      }
    });
  }
}
