import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HammertimeDirective } from '../directive/hammertime.directive';
import { ScrollComponent } from './common/scroll/scroll.component';
import { SliderComponent } from './common/slider/slider.component';
import { FormatTimePipe } from '../pipes/format-time.pipe';

@NgModule({
  declarations: [
    ScrollComponent,
    HammertimeDirective,
    SliderComponent,
    FormatTimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollComponent,
    HammertimeDirective,
    SliderComponent,
    FormatTimePipe
  ]
})
export class ShareModule { }
