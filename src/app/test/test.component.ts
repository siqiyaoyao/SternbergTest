import { GroupSettingService } from './../stb-test/services/group-setting.service';
import { Component, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  host: { '(window:keydown)': 'doSomething($event)', },
})
export class TestComponent implements OnInit {
  time = new Date()
  imagePath = "./assets/icons/default.jpg"
  group:any
  index = 1
  countTime = 1
  res = false
  allGroup:any  
  candidatesArr = []
  result = -1;

  
  testTimes = 1
  srcRecord =''

  // Timer for per round
  startTimer 
  endTimer
  totalTime

  // training
  imagePathInit
  trainResults =''
  training
  trainIndex = 1

  constructor(
    private ref:ChangeDetectorRef,
    private GroupSettingService:GroupSettingService,
    private Router:Router
  ) { 
   
      this.time = new Date();
      this.imagePath = "./assets/icons/default.jpg"
 
  }

  ngOnInit() {
    this.GroupSettingService.startTime = new Date();
    this.GroupSettingService.score = 0
    this.group = 1
    this.index = 1
    this.allGroup = this.GroupSettingService.getSettingArr()
    this.testKeys()
   

  }
  //---------------------------------------------------------//
  // The actual trials 
  //
  //---------------------------------------------------------//
  // Patterns section
  showPics(){
    this.imagePath ="./assets/icons/default.jpg"
    let a = setInterval(() => {
      if(this.group > 8 ){
        console.log('end',this.group)
        clearInterval(a)
        this.GroupSettingService.endTime = new Date();
        this.Router.navigateByUrl("stb/step3")
      }else{
      
      if(this.index >this.allGroup[this.group].end ){
        console.log('need change group',this.group,this.index)
        this.group = this.group +1
        if(this.group < 9){
          this.index = this.allGroup[this.group].start
          if(this.allGroup[this.group].end==0){
            this.group++
          }
      
        }else{

        }     
      }
      if(this.countTime%5 ==0){
        this.countTime = 1
        this.imagePath ="./assets/icons/default.jpg"
        this.setQuestion()
        clearInterval(a)

      }else{
        this.countTime = this.countTime+1
        let picName = this.addPreZore(this.index)
        this.imagePath ="./assets/icons/"+ String(this.group) +'-'+picName+'.jpg'
        this.candidatesArr.push(this.imagePath);
        this.index = this.index+1
      }
      
    }
  }, 1000) // setting per time default 1000
  }
  // Question section
  setQuestion(){
    setTimeout(() => {
      let flag = this.getRandomInt(1,100)
      let randomIndex = this.getRandomInt(1,100) % 4
      if(flag%2 == 0){
          this.imagePath = this.candidatesArr[randomIndex]
          this.result = 0;
          this.srcRecord = this.imagePath
          this.testTimes++
      }else{
          this.imagePath = this.GroupSettingService.answerArr[this.testTimes]
          //this.imagePath ="/src/assets/icons/2-002.jpg"
          this.result = 1;
          this.srcRecord = this.imagePath
          this.testTimes++
      }
      this.startTimer = new Date()
      console.log('start',this.startTimer)
      this.res = true

    }, 2000);
  }
  // Record user performance per round
  recordScore(index,src,score){
    this.endTimer = new Date()
    this.totalTime = this.endTimer - this.startTimer
    console.log(this.endTimer,this.totalTime)
   let perRecord = {
      index: index-1,
      src:src,
      score: score,
      duration_ms:this.totalTime
  
    }
    this.GroupSettingService.records.push(perRecord)
  }
  // Difference respons for dif ans
  clickYes(){
    this.res = false
    this.showPics()
    // score
    if(this.result == 0){
      this.GroupSettingService.score++;
      this.recordScore(this.testTimes,this.srcRecord,1)
    }else{
      this.recordScore(this.testTimes,this.srcRecord,0)
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
      this.recordScore(this.testTimes,this.srcRecord,1)
    }else{
      this.recordScore(this.testTimes,this.srcRecord,0)
    }
    //initial
    this.candidatesArr = [];
    this.result = -1
  }

  // showUnixTime(){
  //   let temp = new Date()
  //   this.time = temp
  //   console.log(this.time)
  //   //return temp
  // }

  //---------------------------------------------------------//
  // Data process
  //
  //---------------------------------------------------------//
  // Pre process of jpg's name 
  addPreZore(num){
    console.log('num',num)
    let t = (num+'').length
    let s = ''
    for(var i=0; i<3-t; i++){
      s += '0';
     }
     return s+num;
  }

  // get RandomSeeds
  getRandomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  //---------------------------------------------------------//
  // training process
  //
  //---------------------------------------------------------//
  testKeys(){
    this.imagePath ="./assets/icons/default.jpg"
   // this.showTrainAns()
   let a = setInterval(() => {
    this.imagePath ="./assets/train/3-00"+this.trainIndex+".jpg"
    this.trainIndex++
    if(this.trainIndex > 2){
      this.trainIndex = 1
      this.showTrainAns()
      clearInterval(a)
      
    }

   }
      
   ,2000)

  }
  showTrainAns(){
    setTimeout(() => {
      this.imagePath ="./assets/icons/3-003.jpg"
      this.training = true

    }
    ,2000)
  }

  //---------------------------------------------------------//
  // Detect keyboads inputs
  //
  //---------------------------------------------------------//

  doSomething(event){
    if(this.res){
      if(event.key =='a'){
        this.clickYes()
      }
      if(event.key =='d'){
        this.clickNo()
      }
    }
    if(this.training){
      if(event.key =='d'){
        this.trainResults = "You got 1 score as the single target letter presented was present in the previous set. The actual trials will begin in 5s. "
        setTimeout(() => {
          this.imagePath ="./assets/icons/defaut.jpg"
          this.training = false
          this.trainResults = ''
          this.showPics()
        }
        ,5000)

      }
      if(event.key =='a'){
        this.trainResults = "You got 0 score as the single target letter presented was not present in the previous set. Please try again."
        setTimeout(() => {
          this.training = false
          this.trainResults = ''
          this.testKeys()

        }
        ,5000)
      }
    }
  }
  

}
