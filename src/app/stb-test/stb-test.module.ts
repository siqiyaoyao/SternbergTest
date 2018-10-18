import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StbTestComponent } from './stb-test.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { Step1Component } from './pages/step1/step1.component';
import { Step2Component } from './pages/step2/step2.component';
import { Step3Component } from './pages/step3/step3.component';


export const stbRoutes: Routes = [
  {
    path:'', component:StbTestComponent,
    children:[
      {path:'step1',component:Step1Component},
      //{path:'step2',component:Step2Component},
      {path:'step3',component:Step3Component}
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(stbRoutes),
    NgZorroAntdModule,
    FormsModule
    
  ],
  declarations: [StbTestComponent, Step1Component, Step2Component, Step3Component, ]
})
export class StbTestModule { }
