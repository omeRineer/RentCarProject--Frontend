import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

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
}
