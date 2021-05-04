import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-messagewall',
  templateUrl: './messagewall.component.html',
  styleUrls: ['./messagewall.component.scss']
})
export class MessagewallComponent implements OnInit {

  constructor(private messageService: MessageService) { }
  messages:any;

  ngOnInit(): void {
    this.messageService.getMessageByChannel(0).then((value) => {
      this.messages=value;
    });    
  }

}
