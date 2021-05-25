import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from './contact.models';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  url = 'https://back.message.btcv.fr';
 
  createContact(data: IContact[]): Observable<Object> {
    return this.http.post(`${this.url}/api/contact`, data)  
  }
}
