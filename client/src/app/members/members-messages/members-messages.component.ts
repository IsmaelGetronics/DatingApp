import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxGalleryThumbnailsComponent } from '@kolkov/ngx-gallery';
import { Message } from 'src/app/_models/message';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-members-messages',
  templateUrl: './members-messages.component.html',
  styleUrls: ['./members-messages.component.css']
})
export class MembersMessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm?: NgForm
  @Input() username?: string;
  messageContent = '';
  loading=false;

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

  sendMessage(){
    if (!this.username) return;    
    this.loading=true;
    this.messageService.sendMessage(this.username, this.messageContent).then(()=>{
      this.messageForm?.reset();
    }).finally(() => this.loading=false);
  }
  
}
