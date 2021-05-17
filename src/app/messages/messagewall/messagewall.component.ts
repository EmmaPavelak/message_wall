import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from './message.service';

declare var $:any;

@Component({
    selector: 'app-messagewall',
    templateUrl: './messagewall.component.html',
    styleUrls: ['./messagewall.component.scss']
})
export class MessagewallComponent implements OnInit, OnDestroy {

    constructor(private messageService: MessageService) { }
    messages:any = [];
    refreshInterval:any = null

    ngOnInit(): void {

        this.refreshMessages()
        .then(()=>{
            setInterval(() => {
                this.refreshMessages()
            }, 1000);
        })
    }

    ngOnDestroy(){
        if(this.refreshInterval){
            clearInterval(this.refreshInterval)
        }
    }

    refreshMessages(){
        return this.messageService.getMessageByChannel(0)
        .then((value) => {
            if(!this.messages.length){
                setTimeout(() => {
                    this.scrollDown()
                }, 300);
            }
            this.messages=value;
            return this.messages
        });
    }

    scrollDown(){
        $("#chat-panel").scrollTop($("#chat-panel")[0].scrollHeight)
    }

}
