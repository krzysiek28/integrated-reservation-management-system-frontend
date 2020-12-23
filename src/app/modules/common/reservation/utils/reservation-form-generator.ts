import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ReservationControlNames} from './reservation-consts';
import {DateUtil} from '../../../../utils/date-util';

export class ReservationFormGenerator {
  public static generateFormGroup(): FormGroup {
    return new FormGroup({
      [ReservationControlNames.START_DATE]: new FormControl(Validators.required),
      [ReservationControlNames.END_DATE]: new FormControl(Validators.required)
    });
  }

  public static generateSearchReservationFormGroup(): FormGroup {
    return new FormGroup({
      [ReservationControlNames.DATE_FROM]: new FormControl(new Date()),
      [ReservationControlNames.DATE_TO]: new FormControl(DateUtil.addDays(new Date(), 7))
    });
  }
}
