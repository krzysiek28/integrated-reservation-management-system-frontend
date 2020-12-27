import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProfileControlNames} from './profile-form-consts';
import {PersonalDataModel} from '../../../objects/models/PersonalDataModel';

export class ProfileFormGenerator {
  public static generateSearchReservationFormGroup(personalData: PersonalDataModel): FormGroup {
    return new FormGroup({
      [ProfileControlNames.PERSONAL_DATA_ID]: new FormControl(personalData?.id),
      [ProfileControlNames.FIRST_NAME]: new FormControl(personalData?.firstName, Validators.required),
      [ProfileControlNames.LAST_NAME]: new FormControl(personalData?.lastName, Validators.required),
      [ProfileControlNames.PHONE_NUMBER]: new FormControl(personalData?.phoneNumber, Validators.required),
      [ProfileControlNames.CONTACT_EMAIL]: new FormControl(personalData?.contactEmail),
    });
  }
}
