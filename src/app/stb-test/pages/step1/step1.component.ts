import { GroupSettingService } from './../../services/group-setting.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {
  userId: string;
  constructor(
    private Router:Router,
    private GroupSettingService: GroupSettingService
  ) { }

  ngOnInit() {
   // this.GroupSettingService.colorStart = 100
   this.GroupSettingService.initData()
  }

  startTest(){
    console.log('start')
    this.GroupSettingService.userId = this.userId
    this.Router.navigateByUrl("test")
  }

}
