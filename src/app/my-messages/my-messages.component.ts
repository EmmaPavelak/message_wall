import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../messages/messagewall/message.service';
import jwt_decode from "jwt-decode";
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.scss']
})
export class MyMessagesComponent implements OnInit {

  messages:any;
  onemessage:any;
  editMessageForm: FormGroup;  
  submitted = false;  
  tokenDecode:any;
  token= localStorage.getItem('token');
  user:any;

  constructor(private messageService: MessageService, private userService: UsersService, private formBuilder: FormBuilder) { 
    this.onemessage={id:0, message:'', username:''}
  this.editMessageForm = this.formBuilder.group({
      id: ['', Validators.required],
      message: ['', Validators.required],
      username: ['', Validators.required]
    });
  }

  get f() { return this.editMessageForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.editMessageForm.invalid) {
      return;
    }
    this.updateMessage(this.editMessageForm.value.id,this.editMessageForm.value);
  }

  ngOnInit(): void {
    if(this.token != null){
      this.tokenDecode = jwt_decode(this.token); 
        this.messageService.getMessageByUser(this.tokenDecode.id).then((value) => {
          this.messages=value;
          console.log(value);
        });
      }

 
  }
  getMessageById(id: number){
    this.messageService.getMessageById(id).then((value) => {
      this.onemessage=value;
      console.log(value);
    });
  }
  
  deleteMessage(id: number){
    this.messageService.deleteMessage(id);
  }
  updateMessage(id: number, data:any){
    this.messageService.updateMessage(id,data);
  }

}
