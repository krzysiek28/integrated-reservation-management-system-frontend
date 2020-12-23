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

@NgModule({
    imports: [
        MatDatepickerModule,
        MatFormFieldModule,
        CommonModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatTabsModule
    ],
    declarations: [
        ReservationDesktopComponent,
        ReservationSearchComponent,
        OldReservationsOverviewComponent
    ]
})
export class ReservationModule {
}
