import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FormRegisterService {
  
  _url='http://localhost:3000/register';
  constructor(private _http:HttpClient) { }
  enroll(user:User){
    return this._http.post<any>(this._url, user).pipe(catchError(this.errorHandler))
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error);
  }
}
