import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "https://jsonplaceholder.cypress.io/";
  constructor(private http: HttpClient) { }
  // listUsers GET data
  listUsers() {
    return this.http.get(this.baseUrl + 'users');
  }
  // viewUsers 
  viewUsers(id: any) {
    return this.http.get(this.baseUrl + 'users/' + id);
  }
  // AddUser POST data
  addUser(userObj: any) {
    return this.http.post(this.baseUrl + 'users', userObj);
  }
  // deleteUser DELETE data
  deleteUser(id:any){
    return this.http.delete(this.baseUrl + 'users/' + id);
  }
}
