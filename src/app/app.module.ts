import { Step2Component } from './stb-test/pages/step2/step2.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData, CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';





registerLocaleData(zh);
export const appRoutes:Routes =[

  {path:'stb',loadChildren:() => import('./stb-test/stb-test.module').then(m => m.StbTestModule)},
  { path: '' ,redirectTo:'/stb/step1', pathMatch:'full'},//normal
  {path:'test',component:TestComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,


  ],
  imports: [
    // route
    RouterModule.forRoot(
      appRoutes,{useHash: true},
      //{enableTracing:true}
    ),
    // others
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    NgZorroAntdModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN, },{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
