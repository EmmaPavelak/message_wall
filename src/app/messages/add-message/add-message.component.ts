import { Component, OnInit } from '@angular/core';
import jwt_decode from "jwt-decode";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/users/users.service';
import { MessageService } from '../messagewall/message.service';
import { ActivatedRoute } from '@angular/router';
import { ChannelsService } from 'src/app/channels/channels.service';
import Swal from 'sweetalert2';

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
    channel:any;

    ngOnInit(): void {
        Swal.fire({
            title: "Hello !",
            text: "Merci de choisir un pseudo",
            input: 'text',
            showCancelButton: false,
            showCloseButton: false,
            keydownListenerCapture: false,
            focusConfirm: false,
            allowEscapeKey: false,
            allowOutsideClick: false,
            preConfirm : (name) =>{
                return Promise.resolve()
                .then(() => {
                    if (!name) {
                        throw new Error("Le nom doit être rempli")
                    }
                    return name
                })
                .catch(error => {
                    Swal.showValidationMessage(error)
                })
            }
        }).then((result) => {
          sessionStorage.setItem('username', result.value);
            this.addMessageForm.patchValue({
                username: result.value
               
            });
        });

    }

    constructor(private messageService: MessageService, private channelService: ChannelsService, private route: ActivatedRoute, private formBuilder: FormBuilder, private userService: UsersService) {
     
      if(this.route.snapshot.params['id'] == null){
        this.idChannel = 0;
      }

      if(this.token != null){
        this.tokenDecode = jwt_decode(this.token);
        this.idUser = this.tokenDecode.id;

        this.userService.getUserByID(this.tokenDecode.id).then((value) => {
          this.user = value;
          });        
      }   

     
      this.channelService.getChannelById(this.idChannel).then((value) => {
        this.channel=value;
        console.log(value);
      });

      this.addMessageForm = this.formBuilder.group({
        message: ['', Validators.required],
        username: "Anonyme",
        idUser:this.idUser,
        idChannel:this.idChannel,
        sendDate: new Date()
      });
      console.log("addMessageForm",this.addMessageForm)

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
      if(this.user != undefined){
        this.user.nbmess++;
        this.userService.updateUser(this.tokenDecode.id,this.user);
      }
      
      this.channel.nbMessages++;     
      this.channelService.updateChannel(this.channel.id,this.channel);
      console.log(this.addMessageForm.value);
      this.messageService.addMessage(this.addMessageForm.value).then((value) => {
        console.warn('Your msg has been submitted', this.addMessageForm.value);

        this.submitted = false;
        this.addMessageForm.reset();

        this.addMessageForm = this.formBuilder.group({
          message: ['', Validators.required],
          username: sessionStorage.getItem('username'),
          idUser:this.idUser,
          idChannel:this.idChannel,
          sendDate: new Date()
        });
      });
    }

}
