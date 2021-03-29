import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './users.models';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000';

  getUserByID(id: number): Observable<Object> {
    return this.http.get<Object>(`${this.url}/api/auth/users/${id}`);
  }

  createUser(data: IUser[]): Observable<Object> {
    return this.http.post(`${this.url}/api/auth/registration`, data)  
  }
  loginUser(data: IUser[]): Observable<Object> {
    return this.http.post(`${this.url}/api/auth/login`, data)
  
  }
  updateUser(id: number,data: IUser[]): Observable<Object> {
    return this.http.put(`${this.url}/api/auth/users/${id}`, data)  
  }
}
