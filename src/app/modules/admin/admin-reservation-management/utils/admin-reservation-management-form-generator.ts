import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ReservationManagementControlNames} from './admin-reservation-management-consts';
import {VisitDetailsModel} from '../../../../objects/models/VisitDetailsModel';

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

  public static generateSearchReservationFormGroup(): FormGroup {
    return new FormGroup({
      [ReservationManagementControlNames.DATE_FROM]: new FormControl((new Date()).toISOString(), Validators.required),
      [ReservationManagementControlNames.DATE_TO]: new FormControl((new Date()).toISOString(), Validators.required),
      [ReservationManagementControlNames.TIME_FROM]: new FormControl(null),
      [ReservationManagementControlNames.TIME_TO]: new FormControl(null),
      [ReservationManagementControlNames.RESERVATION_STATUS]: new FormControl('Dowolny', Validators.required)
    });
  }

  public static generateVisitDetailsFormGroup(visitDetails?: VisitDetailsModel): FormGroup {
    return new FormGroup({
      [ReservationManagementControlNames.COST]: new FormControl(visitDetails?.cost, Validators.min(0)),
      [ReservationManagementControlNames.NOTE]: new FormControl(visitDetails?.note),
    });
  }
}
