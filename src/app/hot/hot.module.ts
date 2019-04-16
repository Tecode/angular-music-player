import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotRoutingModule } from './hot-routing.module';
import { HotComponent } from './hot.component';
import { SongListDetailComponent } from './song-list-detail/song-list-detail.component';
import { ListContentComponent } from '../common/list-content/list-content.component';
import { ScrollComponent } from '../common/scroll/scroll.component';
import { SliderComponent } from '../common/slider/slider.component';
import { BigCardComponent } from '../common/big-card/big-card.component';
import { SmallCardComponent } from '../common/small-card/small-card.component';
import { HammertimeDirective } from '../../directive/hammertime.directive';

@NgModule({
  declarations: [
    HotComponent,
    SongListDetailComponent,
    ListContentComponent,
    ScrollComponent,
    SliderComponent,
    BigCardComponent,
    SmallCardComponent,
    HammertimeDirective
  ],
  imports: [
    CommonModule,
    HotRoutingModule
  ]
})
export class HotModule { }
