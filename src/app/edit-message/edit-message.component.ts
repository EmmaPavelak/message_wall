import { Component, OnInit } from '@angular/core';
import { MessageService } from '../messages/messagewall/message.service';

@Component({
  selector: 'app-edit-message',
  templateUrl: './edit-message.component.html',
  styleUrls: ['./edit-message.component.scss']
})
export class EditMessageComponent implements OnInit {

 
  constructor(private messageService: MessageService) { }

  messages:any;
  onemessage:any;
  
  ngOnInit(): void {
    this.messageService.getAllMessages().then((value) => {
      this.messages=value;
      console.log(value);
    });
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
