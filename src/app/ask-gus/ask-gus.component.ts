import { Component, OnInit } from '@angular/core';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

@Component({
  selector: 'app-ask-gus',
  templateUrl: './ask-gus.component.html',
  styleUrls: ['./ask-gus.component.scss']
})
export class AskGusComponent implements OnInit {

  id = 'qDuKsiwS5xw';
  playerVars = {
    cc_lang_pref: 'en'
  };
  private player;
  private ytEvent;

  constructor() {
  
  }
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }


 

  ngOnInit() {
  }
  

}
