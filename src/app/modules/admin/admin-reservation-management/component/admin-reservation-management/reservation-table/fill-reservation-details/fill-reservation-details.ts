import {Component, Inject} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AdminReservationManagementFormGenerator} from '../../../../utils/admin-reservation-management-form-generator';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ReservationModel} from '../../../../../../../objects/models/ReservationModel';
import {ReservationManagementControlNames} from '../../../../utils/admin-reservation-management-consts';

@Component({
  selector: 'app-fill-reservation-details',
  templateUrl: './fill-reservation-details.html',
  styleUrls: ['./fill-reservation-details.css']
})
export class FillReservationDetails {

  formGroup: FormGroup;
  reservationManagementControlNames = ReservationManagementControlNames;

  constructor(public dialogRef: MatDialogRef<FillReservationDetails>,
              @Inject(MAT_DIALOG_DATA) public data: ReservationModel) {
    this.formGroup = AdminReservationManagementFormGenerator.generateVisitDetailsFormGroup(data.visitDetails);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
