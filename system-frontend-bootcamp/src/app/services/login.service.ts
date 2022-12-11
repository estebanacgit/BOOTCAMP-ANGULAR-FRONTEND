import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubjet = new Subject<boolean>();

  constructor(private httpClient:HttpClient) { }


  public generateToken(loginData:any) {

    return this.httpClient.post(`${baseUrl}/generate-token`, loginData);
  }

  public loginUser(token:any){
    localStorage.setItem('token', token);
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  public logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getToken() {
    return localStorage.getItem('token');
  }

  public setUsername(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUsername(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logoutUser();
      return null;
    }
  }

  public getUsernameRole() {
    let user = this.getUsername();
    return user.authorities[0].authority;
  }

  public getCurrentUser(){
    return this.httpClient.get(`${baseUrl}/user-current`)
  }

}
