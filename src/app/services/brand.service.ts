import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl="https://localhost:44337/api/brands"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ListResponseModel<Brand>>{
    let newPath=this.apiUrl+"/getall"
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  getById(id:number):Observable<ItemResponseModel<Brand>>{
    let newPath=this.apiUrl+"/getbyid?brandId="+id
    return this.httpClient.get<ItemResponseModel<Brand>>(newPath)
  }

  add(brand:Brand):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/add"
    return this.httpClient.post<ResponseModel>(newPath,brand)
  }

  delete(brand:Brand):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/delete"
    return this.httpClient.post<ResponseModel>(newPath,brand)
  }

  update(brand:Brand):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/update"
    return this.httpClient.post<ResponseModel>(newPath,brand)
  }
}
