import { Component, OnInit,TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stb-test',
  templateUrl: './stb-test.component.html',
  styleUrls: ['./stb-test.component.css']
})
export class StbTestComponent implements OnInit {
  
  constructor() { }

  isCollapsed = true;
  triggerTemplate = null;
  imagePath = './assets/others/ICIC.png'
  @ViewChild('trigger') customTrigger: TemplateRef<void>;
  

  /** custom trigger can be TemplateRef **/
  changeTrigger(): void {
    this.triggerTemplate = this.customTrigger;
  }
  ngOnInit() {
  }

}
