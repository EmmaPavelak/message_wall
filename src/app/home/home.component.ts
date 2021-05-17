import { Component, OnInit } from '@angular/core';
import { ChannelsService } from '../channels/channels.service';
import jwt_decode from "jwt-decode";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(private channelService: ChannelsService) { }

    channels:any;

    tokenDecode:any;
    token= localStorage.getItem('token');

    ngOnInit(): void {

        if(this.token != null){
          this.tokenDecode = jwt_decode(this.token);
            this.channelService.getChannelByUser(this.tokenDecode.id).then((value) => {
              this.channels=value;
              console.log(value);
            });
          }


      }

    }
