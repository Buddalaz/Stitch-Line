import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import AdminDTO from "../login-page/dto/AdminDTO";
import {Observable} from "rxjs";
import Admin from "../login-page/dto/Admin";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  register(dto: AdminDTO): Observable<any>{

    const admin = {
      employeeNumber:dto.admin.emp_number,
      nic:dto.admin.nic
    };

    return this.http.post(this.baseUrl+'user',{
      name:dto.fName,
      email:dto.email,
      mobile:dto.mobile,
      username:dto.username,
      password:dto.password,
      userRole:dto.userRole,
      admin:admin
    },{
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    });
  }
}
