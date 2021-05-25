import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from './message.service';

declare var $:any;

@Component({
    selector: 'app-messagewall',
    templateUrl: './messagewall.component.html',
    styleUrls: ['./messagewall.component.scss']
})
export class MessagewallComponent implements OnInit, OnDestroy {

    constructor(private messageService: MessageService,private route: ActivatedRoute) {
        if(this.idChannel == undefined){
            this.idChannel=0;
        }
     }
    messages:any = [];
    refreshInterval:any = null
    idChannel= this.route.snapshot.params['id'];
    ngOnInit(): void {
        
        this.refreshMessages()
        .then(()=>{
            setInterval(() => {          
                this.refreshMessages();
            }, 1000);
        })
    }

    ngOnDestroy(){
        if(this.refreshInterval){
            clearInterval(this.refreshInterval)
        }
    }

    refreshMessages(){
        return this.messageService.getMessageByChannel(this.idChannel)
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
