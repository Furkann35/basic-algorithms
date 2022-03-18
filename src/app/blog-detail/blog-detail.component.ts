import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlogDetail } from '../models/blog';
import { BlogCategory } from '../models/blog-category';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  constructor(
    private blogService: BlogService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService
  ) {}
  baseImageUrl = 'https://localhost:44318';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.getBlogById(params['id']);
      }
    });
    this.getAllBlogsCategory();
    this.getRecent();
    this.urlController()
  }

  blogCategory: BlogCategory[];
  getAllBlogsCategory() {
    this.blogService.getAllBlogCategory().subscribe((response) => {
      this.blogCategory = response.data;
    });
  }

  previousRouterFunction() {
    if (this.router.url == '/blog-detail/1') {
      this.toastService.error('Zaten ilk blogdasınız', 'Hata');
    } else {
      let urlCount = this.router.url.split('/blog-detail/');
      let total = Number(urlCount[1]) - 1;
      this.router.navigate(['/blog-detail/' + total]);
    }
  }

  urlController(){
    this.blogService.getAllBlogs().subscribe((response) => {
      this.blogLengthController = response.data;
      let test = this.blogLengthController.length;
    let urlCount = this.router.url.split('/blog-detail/');
    console.log(test);
    console.log(+urlCount[1]);
    if(+urlCount[1] >= test){
      this.router.navigate(['/blog-detail/' + 1]);
      console.log("false");
    }
    console.log("true");
  });
  }
   
  blogLengthController: BlogDetail[] = [];
  nextRouterFunction() {
    this.blogService.getAllBlogs().subscribe((response) => {
      let test = this.blogLengthController.length;
      this.blogLengthController = response.data;
      let urlCount = this.router.url.split('/blog-detail/');
      let total = Number(urlCount[1]) + 1;
      console.log(urlCount[1]);
      console.log(test);
      
      if (Number(urlCount[1]) >= test) {
        this.toastService.error('Son blogdasınız', 'Hata');
         
        this.router.navigate(['/blog-detail/' + test]);
      } else {
        this.router.navigate(['/blog-detail/' + total]);
      }
    });
  }

  recent: BlogDetail[];
  getRecent() {
    this.blogService.getAllBlogs().subscribe((response) => {
      this.recent = response.data;
      this.recent = this.recent.slice(0, 3);
    });
  }

  blog: BlogDetail;
  blogImage: BlogDetail[];
  getBlogById(id: number) {
    this.blogService.getBlogById(id).subscribe((response) => {
      this.blog = response.data[0];
      this.blogImage = response.data;
    });
  }
}
