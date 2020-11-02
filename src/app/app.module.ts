import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './root/app.component';
import {WelcomePageModule} from './modules/welcome-page/welcome-page.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReservationModule} from './modules/reservation/reservation.module';
import {MatButtonModule} from '@angular/material/button';

export let INTERNAL_MODULES = [
  WelcomePageModule,
  ReservationModule
];

export let EXTERNAL_MODULES = [
  BrowserModule,
  AppRoutingModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    INTERNAL_MODULES,
    EXTERNAL_MODULES,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
