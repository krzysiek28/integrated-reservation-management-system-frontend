import {FormControl, FormGroup, Validators} from '@angular/forms';

export class ReservationFormGenerator {
  public static generateFormGroup(): FormGroup {
    return new FormGroup({
      startDate: new FormControl(Validators.required),
      endDate: new FormControl(Validators.required)
    });
  }
}
