import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { ResponseData } from '../dto/response-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../dto/login-user';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

 
  private baseUrl = "http://localhost:8085/api/users";
  private loginUrl = "/login";
  
  constructor(
    private http: HttpClient
  ) { }

    
    
  

  login(requestLogin:LoginUser): Observable<string> {
    const headers=new HttpHeaders(
      {
        'Content-Type' : 'application/json'
      });
    console.log(JSON.stringify(requestLogin));
    return this.http.post<string>(
      this.baseUrl+this.loginUrl, 
      JSON.stringify(requestLogin),{headers:headers}
    );
  }

  
}
