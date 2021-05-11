import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChannelsService } from '../channels/channels.service';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-edit-channel',
  templateUrl: './edit-channel.component.html',
  styleUrls: ['./edit-channel.component.scss']
})
export class EditChannelComponent implements OnInit { 

    users: any;
    channels: any;
    channel:any;
    tokenDecode:any;
    token= localStorage.getItem('token');
    updateForm: FormGroup;  
    createForm: FormGroup;  
    submitted = false;
    registerOK = true;
    id:number=0;
    newUsersId:any;

    constructor(private channelService: ChannelsService, private userService: UsersService, private formBuilder: FormBuilder) { 
      this.channel={
        id: 0,
        channelName: "",
        nbMessages: 0,
        creationDate:new Date(),
        statut:"",
        usersId:""
        }
        
      this.updateForm = this.formBuilder.group({
        id: ['', Validators.required],
        channelName: ['', Validators.required],
       /* nbMessages: ['', [Validators.required, Validators.minLength(6)]],
        creationDate: ['', Validators.required],*/
        statut: ['', Validators.required],
        usersId:""
      });

      this.createForm = this.formBuilder.group({
        channelName: ['', Validators.required],
        nbMessages: 0,        
        statut: ['', Validators.required],
        usersId: null,
        creationDate: new Date()
      });
    }

    ngOnInit(): void {

      this.userService.getAllUser().then((value) => {
        this.users=value;
      });

      this.channelService.getAllChannels().then((value) => {
        this.channels=value;
      });

      if(this.token != null){
        this.tokenDecode = jwt_decode(this.token); 
        this.id=this.tokenDecode.id;
        this.getChannelById(this.id);
      }
    }

    deleteChannel(id:number){
      this.channelService.deleteChannel(id);
    }  

    get f() { return this.updateForm.controls; }


    getChannelById(id: number){
      this.channelService.getChannelById(id).then((value) => {
        this.channel = value; 
        });
    }
    updateChannel(){
      if(this.channel.usersId!=null && this.channel.usersId!=""){
        this.newUsersId= this.channel.usersId+","+this.updateForm.value.usersId;
      }else{
        this.newUsersId=this.updateForm.value.usersId;
      }
      this.channelService.updateChannel(this.tokenDecode.id, {id: this.updateForm.value.id,
      channelName:  this.updateForm.value.channelName,nbMessages:this.channel.nbMessage,creationDate:this.channel.creationDate,
      statut:  this.updateForm.value.statut,
      usersId: this.newUsersId}).then((value) => {
        console.log(value);      
      });
    }
  onSubmit(): void {
    this.submitted = true;
    console.log(this.updateForm.value);
    
    // stop here if form is invalid
    if (this.updateForm.invalid) {
      return;
  }
      this.updateChannel();

  }

  onSubmitCrea(): void {
    this.submitted = true;
    console.log(this.updateForm.value);
    
    // stop here if form is invalid
    if (this.updateForm.invalid) {
      return;
    }
    this.channelService.addChannel(this.createForm.value).then((value) => {
      console.warn('Your order has been submitted', this.createForm.value);
      location.reload();
    });
  }
 
}




  



