import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-aside-profil',
  templateUrl: './aside-profil.component.html',
  styleUrls: ['./aside-profil.component.scss']
})
export class AsideProfilComponent implements OnInit {

  tokenDecode:any;
  token= localStorage.getItem('token');
  user:any;
  
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    if(this.token != null){
      this.tokenDecode = jwt_decode(this.token); 
      this.userService.getUserByID(this.tokenDecode.id).then((value) => {
        this.user = value; 
        });
    }
  }

}
