import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import jwt_decode from "jwt-decode";
import { IUser } from '../users/users.models';

@Component({
  selector: 'app-aside-profil',
  templateUrl: './aside-profil.component.html',
  styleUrls: ['./aside-profil.component.scss']
})
export class AsideProfilComponent {

  tokenDecode:any;
  token= localStorage.getItem('token');
  user:any;
  
  constructor(private userService: UsersService) { 
    this.user= {
      "id": 0,
      "firstname": "",
      "lastname": "",
      "username": "E",
      "email": "",
      "password": "",
      "tel": 0,
      "address": "",
      "birthDate": new Date(),
      "role": "Non connecté",
      "nbmess": 0
  }
    
    if(this.token != null){
      this.tokenDecode = jwt_decode(this.token); 
      this.userService.getUserByID(this.tokenDecode.id).then((value) => {
        this.user = value; 
        });
    }
  }

}
