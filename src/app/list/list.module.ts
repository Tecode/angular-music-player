import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { BigCardComponent } from '../common/big-card/big-card.component';
import { ShareModule } from '../share.module';

@NgModule({
  declarations: [
    ListComponent,
    BigCardComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    ShareModule
  ]
})
export class ListModule { }
