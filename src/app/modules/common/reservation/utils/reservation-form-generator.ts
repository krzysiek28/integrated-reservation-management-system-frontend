import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ReservationControlNames} from './reservation-consts';
import {DateUtil} from '../../../../utils/date-util';
import {PersonalDataModel} from '../../../../objects/models/PersonalDataModel';

export class ReservationFormGenerator {

  public static generateSearchReservationFormGroup(): FormGroup {
    return new FormGroup({
      [ReservationControlNames.DATE_FROM]: new FormControl(new Date()),
      [ReservationControlNames.DATE_TO]: new FormControl(DateUtil.addDays(new Date(), 7))
    });
  }

  public static generateReservationInformationFormGroup(personalDataModel?: PersonalDataModel): FormGroup {
    return new FormGroup({
      [ReservationControlNames.FIRST_NAME]: new FormControl(personalDataModel?.firstName, Validators.required),
      [ReservationControlNames.LAST_NAME]: new FormControl(personalDataModel?.lastName, Validators.required),
      [ReservationControlNames.PHONE_NUMBER]: new FormControl(personalDataModel?.phoneNumber, [Validators.minLength(5), Validators.maxLength(15), Validators.required]),
      [ReservationControlNames.EMAIL]: new FormControl(personalDataModel?.contactEmail, Validators.email),
      [ReservationControlNames.COMMENT]: new FormControl(''),
    });
  }
}
