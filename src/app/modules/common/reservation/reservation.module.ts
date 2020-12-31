import {NgModule} from '@angular/core';
import {ReservationDesktopComponent} from './component/reservation-desktop.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {ReservationSearchComponent} from './component/reservation-search/reservation-search.component';
import {OwnReservationsOverviewComponent} from './component/own-reservations-overview/own-reservations-overview.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {AdminReservationManagementModule} from '../../admin/admin-reservation-management/admin-reservation-management.module';
import {ReservationProcessComponent} from './component/reservation-process/reservation-process.component';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    CommonModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatTabsModule,
    MatIconModule,
    AdminReservationManagementModule,
    MatStepperModule,
  ],
  declarations: [
    ReservationDesktopComponent,
    ReservationSearchComponent,
    OwnReservationsOverviewComponent,
    ReservationProcessComponent
  ]
})
export class ReservationModule {
}
