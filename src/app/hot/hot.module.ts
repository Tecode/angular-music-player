import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotRoutingModule } from './hot-routing.module';
import { HotComponent } from './hot.component';
import { SongListDetailComponent } from './song-list-detail/song-list-detail.component';
import { ListContentComponent } from '../common/list-content/list-content.component';
import { SliderComponent } from '../common/slider/slider.component';
import { SmallCardComponent } from '../common/small-card/small-card.component';
import { HammertimeDirective } from '../../directive/hammertime.directive';
import { ScrollComponent } from '../common/scroll/scroll.component';

@NgModule({
  imports: [
    CommonModule,
    HotRoutingModule
  ],
  declarations: [
    HotComponent,
    SongListDetailComponent,
    ListContentComponent,
    SliderComponent,
    SmallCardComponent,
    ScrollComponent,
    HammertimeDirective
  ],
  exports: [
    CommonModule,
    HotRoutingModule,
    HotComponent,
    SongListDetailComponent,
    ListContentComponent,
    SliderComponent,
    SmallCardComponent,
    ScrollComponent,
    HammertimeDirective
  ]
})
export class HotModule { }
