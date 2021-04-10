import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44337/api/colors"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ListResponseModel<Color>>{
    let newPath=this.apiUrl+"/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  getByColorId(colorId:number):Observable<ItemResponseModel<Color>>{
    let newPath=this.apiUrl+"/getbycolorid?id="+colorId
    return this.httpClient.get<ItemResponseModel<Color>>(newPath)
  }

  add(color:Color):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/add"
    return this.httpClient.post<ResponseModel>(newPath,color)
  }

  delete(color:Color):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/delete"
    return this.httpClient.post<ResponseModel>(newPath,color)
  }

  update(color:Color):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/update"
    return this.httpClient.post<ResponseModel>(newPath,color)
  }
}
