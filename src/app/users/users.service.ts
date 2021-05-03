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

  getUserByID(id: number) {
    //return this.http.get<Object>(`${this.url}/api/auth/users/${id}`);
    return new Promise((resolve, reject) => {this.http.get<Object>(`${this.url}/api/auth/users/${id}`).subscribe( 
      res => {      
        resolve(res);
      },
      (error) => {
        reject(error);
      }
      );
    }); 
  }
  getAllUser(){
    //return this.http.get<Object>(`${this.url}/api/auth/users`); 
    return new Promise((resolve, reject) => {this.http.get<Object>(`${this.url}/api/auth/users`).subscribe( 
      res => {      
        resolve(res);
      },
      (error) => {
        reject(error);
      }
      );
    }); 
  }
  loginUser(data: IUser[]){
    return new Promise((resolve, reject) => { this.http.post(`${this.url}/api/auth/login`, data).subscribe(
      res => {
        const token= Object.values(res)[0].toString();
        localStorage.setItem('token', token);  
  
        resolve(token);
      },
      (error) => {
        reject(error);
      }
      );
    });  
  }
  
  createUser(data: IUser[]): Observable<Object> {
    return this.http.post(`${this.url}/api/auth/registration`, data)  
  }
  updateUser(id: number,data: IUser[]) {
    //return this.http.put(`${this.url}/api/auth/${id}`, data)  
    return new Promise((resolve, reject) => { this.http.put(`${this.url}/api/auth/${id}`, data) .subscribe(
      res => {
        resolve(res);
      },
      (error) => {
        reject(error);
      }
      );
    });  
  }
  deleteUser(id: number){
    return this.http.delete(`${this.url}/api/auth/${id}`)  
  }
  logout() {
    localStorage.removeItem('token');    
    location.reload();
  }
}
