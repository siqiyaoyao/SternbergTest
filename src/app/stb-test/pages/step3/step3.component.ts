import { Router,  } from '@angular/router';
import { GroupSettingService } from './../../services/group-setting.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css']
})
export class Step3Component implements OnInit {

  constructor(
    private GroupSettingService:GroupSettingService,
    private Router:Router,
    private sanitizer: DomSanitizer 
  ) { }
  score = 0
  href:any
  ngOnInit() {
    this.score = this.GroupSettingService.score
    console.log('final',this.GroupSettingService.records)
    let finalData = {
      ID:this.GroupSettingService.userId,
      startTime:this.GroupSettingService.startTime,
      endTime:this.GroupSettingService.endTime,
      data:this.GroupSettingService.records
    }
    var theJSON = JSON.stringify(finalData);
    var uri = "data:application/json;charset=UTF-8," + encodeURIComponent(theJSON);
    this.href =this.sanitizer.bypassSecurityTrustUrl(uri)
  }

  reStart(){
    this.Router.navigateByUrl("stb/step1")
  }

  

}
