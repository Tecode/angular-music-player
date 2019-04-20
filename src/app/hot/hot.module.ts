import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotRoutingModule } from './hot-routing.module';
import { HotComponent } from './hot.component';
import { SongListDetailComponent } from './song-list-detail/song-list-detail.component';
import { ListContentComponent } from '../common/list-content/list-content.component';
import { SmallCardComponent } from '../common/small-card/small-card.component';
import { ShareModule } from '../share.module';

@NgModule({
  imports: [
    CommonModule,
    HotRoutingModule,
    ShareModule
  ],
  declarations: [
    HotComponent,
    SongListDetailComponent,
    ListContentComponent,
    SmallCardComponent,
  ]
})
export class HotModule { }
