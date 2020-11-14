import {NgModule} from '@angular/core';
import {ReservationDesktopComponent} from './component/reservation-desktop.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    CommonModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
    declarations: [
        ReservationDesktopComponent
    ]
})
export class ReservationModule {
}
