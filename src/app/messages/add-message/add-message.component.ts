import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users/users.service';
import { MessageService } from '../messagewall/message.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.scss']
})
export class AddMessageComponent implements OnInit {
  
 
    addMessageForm: FormGroup;  
    submitted = false;  
    seeAddForm= false;
  
    token=localStorage.getItem('token');
    tokenDecode:any; 
    user:any;
    idUser=0;
    idChannel= this.route.snapshot.params['id'];
 
    ngOnInit(): void {  
     
  
    }
  
    constructor(private messageService: MessageService, private route: ActivatedRoute, private formBuilder: FormBuilder, private userService: UsersService) { 
      
      if(this.token != null){
        this.tokenDecode = jwt_decode(this.token);
        this.idUser = this.tokenDecode.id;

        this.userService.getUserByID(this.tokenDecode.id).then((value) => {
          this.user = value; 
          });
      }  
      
      if(this.route.snapshot.params['id'] == null){
        this.idChannel = 0;
      } 

      this.addMessageForm = this.formBuilder.group({
        message: ['', Validators.required],
        username: ['', Validators.required],        
        idUser:this.idUser,
        idChannel:this.idChannel,
        sendDate: new Date()
      });
      
    }
  
    get f() { return this.addMessageForm.controls; }
 
    displayAdd(){
      if (this.seeAddForm == true){
        this.seeAddForm = false;
      }else{
        this.seeAddForm = true;
      }      
    }  

    onSubmit(): void {
      this.submitted = true;

      if (this.addMessageForm.invalid) {
        return;
      }
      this.messageService.addMessage(this.addMessageForm.value).then((value) => {
        console.warn('Your order has been submitted', this.addMessageForm.value);
        location.reload();
      });

      this.user.nbmess++;
      this.userService.updateUser(this.tokenDecode.id,this.user);
    }
   
}
  

