import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminReservationManagementDesktopComponent} from './component/admin-reservation-management-desktop.component';
import {AdminReservationManagementApiService} from './services/admin-reservation-management-api.service';
import {ReservationApiService} from '../../common/reservation/services/reservation-api-service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
    ],
  declarations: [
    AdminReservationManagementDesktopComponent
  ],
  providers: [
    AdminReservationManagementApiService,
    ReservationApiService
  ]
})
export class AdminReservationManagementModule {

}
