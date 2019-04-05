import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../reducer/counter.reducer';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ControllerComponent } from './controller/controller.component';
import { PortalComponent } from './portal/portal.component';
import { BannerComponent } from './portal/banner/banner.component';
import { HeadlineComponent } from './common/headline/headline.component';
import { HotComponent } from './hot/hot.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { BigCardComponent } from './common/big-card/big-card.component';
import { SmallCardComponent } from './common/small-card/small-card.component';
import { ScrollComponent } from './common/scroll/scroll.component';
import { SliderComponent } from './common/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ControllerComponent,
    PortalComponent,
    BannerComponent,
    HeadlineComponent,
    HotComponent,
    SearchComponent,
    ProfileComponent,
    ListComponent,
    BigCardComponent,
    SmallCardComponent,
    ScrollComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
