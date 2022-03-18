import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Advert } from '../models/adverts';
import { AdvertDto } from '../models/advertDto';
import { AdvertCategory } from '../models/advertCategory';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  apiUrl="https://localhost:44318/api/advert/"
  apiUrl2="https://localhost:44318/api/advertcategory/"
  constructor(private httpClient:HttpClient) { }

  getAdverts():Observable<ListResponseModel<AdvertDto>>{
      let newPath=this.apiUrl+"getalldetails";
      return this.httpClient.get<ListResponseModel<AdvertDto>>(newPath);
  }

  getAdvertsAsc():Observable<ListResponseModel<AdvertDto>>{
    let newPath=this.apiUrl+"getallbyasc";
    return this.httpClient.get<ListResponseModel<AdvertDto>>(newPath);
  }

  getAdvertDsc():Observable<ListResponseModel<AdvertDto>>{
    let newPath=this.apiUrl+"getallbydsc";
    return this.httpClient.get<ListResponseModel<AdvertDto>>(newPath);
  }

  getAdvertCategory():Observable<ListResponseModel<AdvertCategory>>{
    let newPath=this.apiUrl2+"getall";
    return this.httpClient.get<ListResponseModel<AdvertCategory>>(newPath);
  }

  getAdvertById(id:number){
    let newPath=this.apiUrl+"getalldetailsbyid?id="+id;
    return this.httpClient.get<ListResponseModel<AdvertDto>>(newPath);
  }

  getAdvertByCategoryId(id:number){
    let newPath =this.apiUrl+"getalldetailsbycategory?categoryId="+id;
    return this.httpClient.get<ListResponseModel<AdvertDto>>(newPath);
  }
}
