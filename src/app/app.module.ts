import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './root/app.component';
import {WelcomePageModule} from './modules/common/welcome-page/welcome-page.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReservationModule} from './modules/common/reservation/reservation.module';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {AccountManagementModule} from './account-management/account-management.module';
import {AdminReservationManagementModule} from './modules/admin/admin-reservation-management/admin-reservation-management.module';
import {AppContextService} from './context/app-context.service';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {ReservationStatusesPipe} from './pipes/reservation-statuses.pipe';
import { ConfirmationPopup } from './utils/confirmation-popup/confirmation-popup';
import {MatDialogModule} from '@angular/material/dialog';
import {CurrencyPlnPipe} from './pipes/currency-pln-pipe';

export let INTERNAL_MODULES = [
  WelcomePageModule,
  ReservationModule,
  AccountManagementModule,
  AdminReservationManagementModule,
];

export let EXTERNAL_MODULES = [
  BrowserModule,
  AppRoutingModule,
  MatButtonModule,
  BrowserAnimationsModule,
  HttpClientModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationPopup,
  ],
  imports: [
    INTERNAL_MODULES,
    EXTERNAL_MODULES,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatDialogModule
  ],
  providers: [
    AppContextService,
    ReservationStatusesPipe,
    CurrencyPlnPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
