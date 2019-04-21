declare var require: any;

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";
import { reducers, effects } from '../store';

// http拦截器,捕获异常，加Token
import { HttpConfigInterceptor } from '../interceptor/httpconfig.interceptor';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ControlComponent } from './control/control.component';
import { PortalComponent } from './portal/portal.component';
import { BannerComponent } from './portal/banner/banner.component';
import { HeadlineComponent } from './common/headline/headline.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchInputComponent } from './search/search-input/search-input.component';
import { HotSearchComponent } from './search/hot-search/hot-search.component';
import { SearchListComponent } from './search/search-list/search-list.component';
import { DetailsComponent } from './details/details.component';

// import { HotModule } from './hot/hot.module';
// import { ListModule } from './list/list.module';
import { ShareModule } from './share.module';

import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { DrawerListComponent } from './common/drawer-list/drawer-list.component';

let Hammer = { DIRECTION_ALL: {} };
if (typeof window != 'undefined') {
  Hammer = require('hammerjs');
}

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    // override hammerjs default configuration
    'swipe': { direction: Hammer.DIRECTION_ALL }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ControlComponent,
    PortalComponent,
    BannerComponent,
    HeadlineComponent,
    SearchComponent,
    ProfileComponent,
    SearchInputComponent,
    HotSearchComponent,
    SearchListComponent,
    DetailsComponent,
    DrawerListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    ShareModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
