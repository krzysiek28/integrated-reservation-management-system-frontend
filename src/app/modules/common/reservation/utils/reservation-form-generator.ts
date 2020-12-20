import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ReservationControlNames} from './reservation-consts';

export class ReservationFormGenerator {
  public static generateFormGroup(): FormGroup {
    return new FormGroup({
      [ReservationControlNames.START_DATE]: new FormControl(Validators.required),
      [ReservationControlNames.END_DATE]: new FormControl(Validators.required)
    });
  }
}
