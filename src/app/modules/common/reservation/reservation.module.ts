import {NgModule} from '@angular/core';
import {ReservationDesktopComponent} from './component/reservation-desktop.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { ReservationSearchComponent } from './component/reservation-search/reservation-search.component';
import { OldReservationsOverviewComponent } from './component/old-reservations-overview/old-reservations-overview.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {AdminReservationManagementModule} from '../../admin/admin-reservation-management/admin-reservation-management.module';

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
  ],
    declarations: [
        ReservationDesktopComponent,
        ReservationSearchComponent,
        OldReservationsOverviewComponent
    ]
})
export class ReservationModule {
}
