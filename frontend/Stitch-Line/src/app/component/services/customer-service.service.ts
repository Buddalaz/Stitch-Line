import { Injectable } from '@angular/core';
import CustomerDTO from "../login-page/dto/CustomerDTO";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  register(dto: CustomerDTO): Observable<any>{
    return this.http.post(this.baseUrl+'user',{
      name:dto.fName,
      email:dto.email,
      mobile:dto.mobile,
      userRole:dto.userRole,
      username:dto.username,
      password:dto.password,
      customer:dto.customer
    },{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    });
  }
}
