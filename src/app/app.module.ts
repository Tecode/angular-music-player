import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../reducer/counter.reducer';

import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
