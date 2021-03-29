import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isConntected= sessionStorage.getItem('isConnected');
  user:any;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUserById(1);
    console.log(this.user.username);
  }
  getUserById(id: number){
    this.userService.getUserByID(id).subscribe(data => {
      console.log(data);
      this.user = data;  
      });  
  }
  
  logout(){
    console.log("bye");
    sessionStorage.setItem('isConnected', "false");
  }

}
