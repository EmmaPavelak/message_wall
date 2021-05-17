import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IChannel } from '../channels/channels.model';
import { ChannelsService } from '../channels/channels.service';
import { MessageService } from '../messages/messagewall/message.service';

@Component({
  selector: 'app-one-channel',
  templateUrl: './one-channel.component.html',
  styleUrls: ['./one-channel.component.scss']
})
export class OneChannelComponent implements OnInit {

  constructor(private messageService: MessageService, private channelService: ChannelsService, private route: ActivatedRoute) {
    this.channel={
      "id": 0,
      "channelName": "",
      "nbMessages": "0",
      "creationDate": "",
      "statut": "Privé",
      "usersId": ""
  }
   }
  
  messages:any;
  channel:any;
  idChannel= this.route.snapshot.params['id'];

  ngOnInit(): void {
    this.messageService.getMessageByChannel(this.idChannel).then((value) => {
      this.messages=value;
      console.log(value);
    });

    this.channelService.getChannelById(this.idChannel).then((value) => {
      this.channel=value;
      console.log(value);
    });
  }
}
