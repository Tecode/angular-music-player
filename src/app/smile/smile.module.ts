import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmileComponent } from './smile.component';
import { SmileRoutingModule } from './smile-routing.module';
import { MyCounterComponent } from '../my-counter/my-counter.component';

// 按模塊加載，注入MyCounterComponent到模塊中
@NgModule({
  declarations: [
    SmileComponent,
    MyCounterComponent
  ],
  imports: [
    CommonModule,
    SmileRoutingModule
  ]
})
export class SmileModule { }
