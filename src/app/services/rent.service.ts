import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rent } from '../models/rent';
import { RentDto } from '../models/rentDto';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  apiUrl="https://localhost:44337/api/rents"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ListResponseModel<Rent>>{
    let newPath=this.apiUrl+"/getall"
    return this.httpClient.get<ListResponseModel<Rent>>(newPath)
  }

  getAllDto():Observable<ListResponseModel<RentDto>>{
    let newPath=this.apiUrl+"/getallbydto"
    return this.httpClient.get<ListResponseModel<RentDto>>(newPath)
  }

  add(rent:Rent):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/add"
    return this.httpClient.post<ResponseModel>(newPath,rent);
  }

  delete(rent:Rent):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/delete"
    return this.httpClient.post<ResponseModel>(newPath,rent);
  }

  update(rent:Rent):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/update"
    return this.httpClient.post<ResponseModel>(newPath,rent);
  }
}
