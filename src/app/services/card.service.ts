import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  apiUrl="https://localhost:44337/api/card"
  constructor(private httpClient:HttpClient) { }

  isCardExist(card:Card):Observable<ResponseModel>{
    let newPath=this.apiUrl+"/iscardexist"
    return this.httpClient.post<ResponseModel>(newPath,card);
  }

  getByCardId(cardId:number):Observable<ListResponseModel<Card>>{
   let newPath=this.apiUrl+"/getbycardid?id="+cardId
   return this.httpClient.get<ListResponseModel<Card>>(newPath);
  }

  updateCard(card:Card){
    let newPath = this.apiUrl + "/update";
    this.httpClient.put(newPath,card);
  }
}
