import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

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

 getByCarId(carId:number):Observable<ListResponseModel<Car>>{
   let newPath=this.apiUrl+"/getbyid?id="+carId
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
 }
}
