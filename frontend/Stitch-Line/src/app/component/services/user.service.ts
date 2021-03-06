import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(username: string): Observable<any>{
      return this.http.get(this.baseUrl+'/user/search/'+username);
    //{headers:{username}}
  }



}
