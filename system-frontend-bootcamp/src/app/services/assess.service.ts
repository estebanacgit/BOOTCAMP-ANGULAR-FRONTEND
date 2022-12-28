import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AssessService {

  constructor(private httpAssess:HttpClient) { }

  public listAssess(){
    return this.httpAssess.get(`${baseUrl}/assess/`);
  }

  public saveAssess(assess:any){
    return this.httpAssess.post(`${baseUrl}/assess/`, assess);
  }

}
