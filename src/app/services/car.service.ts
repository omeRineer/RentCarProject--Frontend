import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ItemResponseModel } from '../models/itemResponseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44337/api/cars"
  constructor(private httpClient:HttpClient) { }

  getAll():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"/getall"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getById(carId:number):Observable<ItemResponseModel<Car>>{
    let newPath=this.apiUrl+"/getbycarid?id="+carId
    return this.httpClient.get<ItemResponseModel<Car>>(newPath)
  }

  getAllByDto():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"/getallbydto"
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getAllByBrand(brandId:number){
    let newPath=this.apiUrl+"/getbybrandid?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getAllByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"/getbycolorId?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

 getByColorAndBrandId(colorId:number,brandId:number):Observable<ListResponseModel<Car>>{
   let newPath=this.apiUrl+"/getbycolorandbrandid?colorId="+colorId+"&brandId="+brandId
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
 }

 getByCarId(carId:number):Observable<ItemResponseModel<Car>>{
   let newPath=this.apiUrl+"/getbyid?id="+carId
   return this.httpClient.get<ItemResponseModel<Car>>(newPath);
 }

 add(car:Car):Observable<ResponseModel>{
   let newPath=this.apiUrl+"/add"
   return this.httpClient.post<ResponseModel>(newPath,car)
 }

 delete(car:Car):Observable<ResponseModel>{
  let newPath=this.apiUrl+"/delete"
  return this.httpClient.post<ResponseModel>(newPath,car)
 }

 update(car:Car):Observable<ResponseModel>{
   let newPath=this.apiUrl+"/update"
   return this.httpClient.post<ResponseModel>(newPath,car)
 }
}
