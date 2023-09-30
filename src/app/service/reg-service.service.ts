import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registration } from '../dto/registration';
import { ResponseData } from '../dto/response-data';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { ResponseError } from '../dto/response-error';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type' : 'application/json'
    }
  )
}
@Injectable({
  providedIn: 'root'
})
export class RegServiceService {
  baseUrl = "http://localhost:8085/api/users";
  registrationUrl = "/register"  
  constructor(
    private http: HttpClient
  ) { }  

  register(requestReg: Registration): Observable<ResponseData> {      
    return this.http.post<ResponseData>(
      this.baseUrl+this.registrationUrl, 
      requestReg, 
      httpOptions
      ).pipe(
          retry(1),
          catchError(this.handleError)
      )          
  }

  handleError(error:ResponseError) {    
    let errorMessage = `Error Code: ${error.status} - ${error.error} \nMessage: ${error.message}`;
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
