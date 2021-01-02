import {ReservationStatusesPipe} from './reservation-statuses.pipe';
import {NgModule} from '@angular/core';
import {CurrencyPlnPipe} from './currency-pln-pipe';

@NgModule({
  declarations: [
    ReservationStatusesPipe,
    CurrencyPlnPipe
  ],
  exports: [
    ReservationStatusesPipe,
    CurrencyPlnPipe
  ]
})
export class PipesModule {

}
