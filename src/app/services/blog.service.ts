import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogDetail } from '../models/blog';
import { BlogCategory } from '../models/blog-category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiUrl="https://localhost:44318/api/blog/";
  apiUrl2="https://localhost:44318/api/blogcategory/";
  constructor(private httpClient:HttpClient) { }

  getAllBlogs():Observable<ListResponseModel<BlogDetail>>{
    let newPath=this.apiUrl+"getalldetails";
    return this.httpClient.get<ListResponseModel<BlogDetail>>(newPath);
  }
  getAllBlogCategory():Observable<ListResponseModel<BlogCategory>>{
    let newPath=this.apiUrl2+"getall";
    return this.httpClient.get<ListResponseModel<BlogCategory>>(newPath);
  }

  getBlogById(id:number):Observable<ListResponseModel<BlogDetail>>{
    let newPath=this.apiUrl+"getalldetailsbyid?id="+id;
    return this.httpClient.get<ListResponseModel<BlogDetail>>(newPath);
  }

  getBlogByCategoryId(id:number){
    let newPath=this.apiUrl+"getalldetailsbycategory?categoryId="+id;
    return this.httpClient.get<ListResponseModel<BlogDetail>>(newPath);
  }

}
