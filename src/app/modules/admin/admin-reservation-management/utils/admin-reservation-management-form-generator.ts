import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ReservationManagementControlNames} from './admin-reservation-management-consts';

export class AdminReservationManagementFormGenerator {

  public static generateReservationManagementFormGroup(): FormGroup {
    return new FormGroup({
      [ReservationManagementControlNames.DATE]: new FormControl((new Date()).toISOString(), Validators.required),
      [ReservationManagementControlNames.TIME_FROM]: new FormControl('', Validators.required),
      [ReservationManagementControlNames.TIME_TO]: new FormControl('', Validators.required),
    });
  }

  public static generateMultipleReservationManagementFormGroup(): FormGroup {
    return new FormGroup({
      [ReservationManagementControlNames.DATE]: new FormControl((new Date()).toISOString(), Validators.required),
      [ReservationManagementControlNames.TIME_FROM]: new FormControl('', Validators.required),
      [ReservationManagementControlNames.VISIT_DURATION]: new FormControl('', Validators.required),
      [ReservationManagementControlNames.BREAK_DURATION]: new FormControl('', Validators.required),
      [ReservationManagementControlNames.VISIT_COUNT]: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(20)])
    });
  }
}
