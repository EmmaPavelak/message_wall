import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import jwt_decode from "jwt-decode";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  user:any;
  tokenDecode:any;
  token= localStorage.getItem('token');
  updateForm: FormGroup;  
  submitted = false;
  registerOK = true;
  id:number=0;


  constructor(private formBuilder: FormBuilder,private userService: UsersService) { 
    this.user={
      id: 0,
      address: "",
      birthDate:new Date(),
      email: "",
      firstname: "",    
      lastname: "",
      password: "",
      tel: 0,
      username: ""}
      
    this.updateForm = this.formBuilder.group({
      id: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]], 
      tel: [''], 
      address: ['',Validators.required], 
      birthDate: ['', Validators.required]
    });
  }

  get f() { return this.updateForm.controls; }

  ngOnInit(): void {
    if(this.token != null){
      this.tokenDecode = jwt_decode(this.token); 
      this.id=this.tokenDecode.id;
      this.userService.getUserByID(this.id).then((value) => {
        this.user = value; 
        });
    }
  }

updateUser(){
  this.userService.updateUser(this.tokenDecode.id,this.updateForm.value).then((value) => {
    console.log(value);
    location.reload();
  });
}
onSubmit(): void {
  this.submitted = true;
  console.log(this.updateForm.value);
  
   // stop here if form is invalid
   if (this.updateForm.invalid) {
    return;
}
    this.updateUser();
    this.submitted = true;

}
 

}
