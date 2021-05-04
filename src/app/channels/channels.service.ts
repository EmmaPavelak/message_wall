import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IChannel } from './channels.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
 
  
  url = 'http://localhost:3000/api/channels';
  channels:any;

  constructor(private http: HttpClient) { }
  
  getAllChannels(){
    return new Promise((resolve, reject) => {this.http.get<Object>(`${this.url}`).subscribe( 
      res => {
        this.channels=res;   
        console.log(res);
        resolve(this.channels);
      },
      (error) => {
        reject(error);
      }
      );
    }); 
  }
  getChannelByUser(userId: number){
    return new Promise((resolve, reject) => {this.http.get<Object>(`${this.url}/username/${userId}`).subscribe( 
      res => {
        resolve(res);
      },
      (error) => {
        reject(error);
      }
      );
    }); 
  }
  getChannelById(id: number){
    return new Promise((resolve, reject) => {this.http.get<Object>(`${this.url}/${id}`).subscribe( 
      res => {
        resolve(res);
      },
      (error) => {
        reject(error);
      }
      );
    }); 
  }
  addChannel(data: IChannel[]){
    return new Promise((resolve, reject) => {this.http.post(`${this.url}`,data).subscribe( 
      (res: any)=> {
        resolve(res);
      },
      (error: any) => {
        reject(error);
      }
      );
    }); 
  }
  updateChannel(id: number,data: IChannel[]){
    return new Promise((resolve, reject) => {this.http.put(`${this.url}/${id}`,data).subscribe( 
      (res: any)=> {
        location.reload();
        resolve(res);
      },
      (error: any) => {
        reject(error);
      }
      );
    }); 
  }
  deleteChannel(id: number){
    return new Promise((resolve, reject) => {this.http.delete(`${this.url}/${id}`).subscribe( 
      (res: any)=> {
        location.reload();
        resolve(res);
      },
      (error: any) => {
        reject(error);
      }
      );
    }); 
  }
}
