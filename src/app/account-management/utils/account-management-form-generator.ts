import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountManagementControlNames} from './account-management-consts';

export class AccountManagementFormGenerator {
  public static generateLoginFormGroup(): FormGroup {
    return new FormGroup({
      [AccountManagementControlNames.USERNAME]: new FormControl('', Validators.required),
      [AccountManagementControlNames.PASSWORD]: new FormControl('', Validators.required)
    });
  }

  public static generateRegisterFormGroup(): FormGroup {
    return new FormGroup({
      [AccountManagementControlNames.USERNAME]: new FormControl('', Validators.required),
      [AccountManagementControlNames.PASSWORD]: new FormControl('', Validators.required),
      [AccountManagementControlNames.EMAIL]: new FormControl('', [Validators.required, Validators.email])
    });
  }
}
