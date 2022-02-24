import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { studentInterface } from './student';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  _url="../assets/data/student.json";
  constructor(private _http:HttpClient) { }
  // getStudents():Observable<any>{  return this._http.get<any>(this._url); }
  getStudents():Observable<studentInterface[]>{
  return this._http.get<studentInterface[]>(this._url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message || "Unknown Server Error");
  }
}
