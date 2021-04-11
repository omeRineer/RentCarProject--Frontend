import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemResponseModel } from '../models/itemResponseModel';
import { LoginModel } from '../models/loginModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44337/api/auth"
  constructor(private httpClient:HttpClient) { }

  login(user:LoginModel):Observable<ItemResponseModel<TokenModel>>{
    let newPath=this.apiUrl+"/login"
    return this.httpClient.post<ItemResponseModel<TokenModel>>(newPath,user)
  }

  isAuth(){
    if(localStorage.getItem("token")){
      return true;
    }else{
      return false;
    }
  }
}
