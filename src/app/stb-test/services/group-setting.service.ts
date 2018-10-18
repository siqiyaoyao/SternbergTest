import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupSettingService {
  score= 0
  userId = ''
  records =[]
  startTime
  endTime
  constructor() { }
  color =
  {
    start:1,
    end: 8
  }
  letter =
  {
    start:1,
    end: 16
  }
  number =
  {
    start:1,
    end: 16
  }
  orientation =
  {
    start:1,
    end: 48
  }
  shape =
  {
    start:1,
    end: 36
  }
  words =
  {
    start:1,
    end: 8
  }
  words2 =
  {
    start:1,
    end: 32
  }
  combination =
  {
    start: 1,
    end: 16
  }
  defaut ={
    
      start:0,
      end: 0
    
  }
  answerArr = [null,
    "./assets/answers/1-009.jpg",//1
    "./assets/answers/1-009.jpg",//2
    "./assets/answers/2-997.jpg",//3 2-1
    "./assets/answers/2-998.jpg",//4
    "./assets/answers/2-999.jpg",//5
    "./assets/answers/2-997.jpg",//6 2-4
    "./assets/answers/3-997.jpg",//7 3-1
    "./assets/answers/3-998.jpg",//8
    "./assets/answers/3-999.jpg",//9
    "./assets/answers/3-997.jpg",//10 3-4
    "./assets/answers/4-002.jpg",//11 4-1
    "./assets/answers/4-005.jpg",//12
    "./assets/answers/4-005.jpg",//13
    "./assets/answers/4-999.jpg",//14
    "./assets/answers/4-998.jpg",//15
    "./assets/answers/4-997.jpg",//16
    "./assets/answers/4-996.jpg",//17
    "./assets/answers/4-995.jpg",//18
    "./assets/answers/4-033.jpg",//19
    "./assets/answers/4-040.jpg",//20
    "./assets/answers/4-994.jpg",//21
    "./assets/answers/4-048.jpg",// 22 4-12
    "./assets/answers/5-996.jpg",//23 5-1
    "./assets/answers/5-997.jpg",//24
    "./assets/answers/5-998.jpg",//25
    "./assets/answers/5-999.jpg",//26
    "./assets/answers/5-996.jpg",//27
    "./assets/answers/5-997.jpg",//28
    "./assets/answers/5-998.jpg",//29
    "./assets/answers/5-999.jpg",//30 
    "./assets/answers/5-003.jpg",//31 5-9
    "./assets/answers/6-009.jpg",//32 6-1
    "./assets/answers/6-009.jpg",//33 6-2
    "./assets/answers/7-996.jpg",//34 7-1
    "./assets/answers/7-997.jpg",//35
    "./assets/answers/7-998.jpg",//36
    "./assets/answers/7-999.jpg",//37
    "./assets/answers/7-996.jpg",//38
    "./assets/answers/7-997.jpg",//39
    "./assets/answers/7-998.jpg",//40
    "./assets/answers/7-999.jpg",//41 7-8
    "./assets/answers/8-998.jpg",//42 8-1
    "./assets/answers/8-999.jpg",//43
    "./assets/answers/8-998.jpg",//44
    "./assets/answers/8-999.jpg",//45 8-4
  
  ]
  getSettingArr(){
    let arr = []
    arr[1] = this.color
    arr[2] = this.letter
    arr[3] = this.number
    arr[4] = this.orientation
    arr[5] = this.shape
    arr[6] = this.words
    arr[7] = this.words2
    arr[8] = this.combination
    arr[9] = this.defaut

    return arr
  }

  initData(){
    this.score = 0
    this.userId =''
    this.records = []
    this.startTime = null
    this.endTime = null   
  }
}
