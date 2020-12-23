import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminReservationManagementDesktopComponent} from './component/admin-reservation-management-desktop.component';
import {AdminReservationManagementApiService} from './services/admin-reservation-management-api.service';
import {ReservationApiService} from '../../common/reservation/services/reservation-api-service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {BrowserModule} from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {AdminReservationManagementComponent} from './component/admin-reservation-management/admin-reservation-management.component';
import {MatSelectModule} from '@angular/material/select';
import {AdminReservationAddDialog} from './component/admin-reservation-management/add-reservation-dialog/admin-reservation-add-dialog';
import {MatDialogModule} from '@angular/material/dialog';
import {AdminReservationsAddDialog} from './component/admin-reservation-management/add-reservations-dialog/admin-reservations-add-dialog';
import {ReservationTableComponent} from './component/admin-reservation-management/reservation-table/reservation-table.component';
import {ReservationColComponent} from './component/admin-reservation-management/reservation-table/reservation-col/reservation-col.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {ReservationStatusesPipe} from '../../../pipes/reservation-statuses.pipe';
import { AdminReservationOverviewComponent } from './component/admin-reservation-overview/admin-reservation-overview.component';
import { AdminReservationNoteManagementComponent } from './component/admin-reservation-note-management/admin-reservation-note-management.component';
import { AdminReservationNoteDialog } from './component/admin-reservation-note-management/admin-reservation-note-dialog/admin-reservation-note-dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatTabsModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
  ],
  declarations: [
    AdminReservationManagementDesktopComponent,
    AdminReservationManagementComponent,
    AdminReservationAddDialog,
    AdminReservationsAddDialog,
    ReservationTableComponent,
    ReservationColComponent,
    ReservationStatusesPipe,
    AdminReservationOverviewComponent,
    AdminReservationNoteManagementComponent,
    AdminReservationNoteDialog
  ],
  exports: [
    ReservationTableComponent
  ],
  providers: [
    AdminReservationManagementApiService,
    ReservationApiService
  ]
})
export class AdminReservationManagementModule {

}
