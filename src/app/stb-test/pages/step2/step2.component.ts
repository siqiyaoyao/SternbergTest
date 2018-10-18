import { GroupSettingService } from './../../services/group-setting.service';
import { Component, OnInit, ChangeDetectorRef, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {
  time = new Date()
  imagePath:any
  group:any
  index = 1
  countTime = 1
  res = false
  allGroup:any
  candidatesArr = []
  result = -1;
  constructor(
    private ref:ChangeDetectorRef,
    private GroupSettingService:GroupSettingService,
    private Router:Router
  ) { 
    setInterval(() => {
      this.time = new Date();
  }, 1000)
  }

  ngOnInit() {
    this.GroupSettingService.score = 0
    this.group = 1
    this.index = 0
    this.allGroup = this.GroupSettingService.getSettingArr()
    console.log(this.GroupSettingService.getSettingArr())
    this.showPics()
   // setInterval(this.showUnixTime, 1000);
   

  }
  showPics(){
    this.imagePath ="/src/assets/icons/default.jpg"
    let a = setInterval(() => {
      if(this.group > 6 ){
        console.log('end',this.group)
        clearInterval(a)
        this.Router.navigateByUrl("stb/step3")
      }else{
      
      if(this.index >=this.allGroup[this.group].end ){
        console.log('need change group',this.group,this.index)
        this.group = this.group +1

        this.index = this.allGroup[this.group].start
          if(this.allGroup[this.group].end==0){
            this.group++
          }
      
       
      }
      if(this.countTime%5 ==0){
        this.countTime = 1
        this.imagePath ="/src/assets/icons/default.jpg"
        this.setQuestion()
        clearInterval(a)

      }else{
        console.log('innerGroup',this.group)
        this.index = this.index+1
        this.countTime = this.countTime+1
        let picName = this.addPreZore(this.index)
        this.imagePath ="/src/assets/icons/"+ String(this.group) +'-'+picName+'.jpg'
        this.candidatesArr.push(this.imagePath);
      }
      

    console.log('group',this.group)
    console.log('index',this.index)
    }
     // console.log('countTime',this.countTime)
  }, 500)
  }
  setQuestion(){
    setTimeout(() => {
      let flag = this.getRandomInt(1,100)
      let randomIndex = this.getRandomInt(1,100) % 4
      console.log('arr',this.candidatesArr)
      console.log('index',randomIndex)
      if(flag%2 == 0){
          this.imagePath = this.candidatesArr[randomIndex]
          this.result = 0;
      }else{
          this.imagePath ="/src/assets/icons/2-002.jpg"
          this.result = 1;
      }

      
      this.res = true

    }, 2000);
  }

  clickYes(){
    this.res = false
    this.showPics()
    // score
    if(this.result == 0){
      this.GroupSettingService.score++;
    }
    //initial
    this.candidatesArr = [];
    this.result = -1
  
  }
  clickNo(){
    this.res = false
    this.showPics()
    // score
    if(this.result == 1){
      this.GroupSettingService.score++;
    }
    //initial
    this.candidatesArr = [];
    this.result = -1
  }
  showUnixTime(){
    let temp = new Date()
    this.time = temp
    console.log(this.time)
   
    //return temp
  }

  addPreZore(num){
    console.log('num',num)
    let t = (num+'').length
    let s = ''
    for(var i=0; i<3-t; i++){
      s += '0';
     }
     return s+num;
  }

  getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  
}
