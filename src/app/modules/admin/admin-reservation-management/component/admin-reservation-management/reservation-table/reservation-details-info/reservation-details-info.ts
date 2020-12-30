import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ReservationModel} from '../../../../../../../objects/models/ReservationModel';

@Component({
  selector: 'app-reservation-details-info',
  templateUrl: './reservation-details-info.html',
  styleUrls: ['./reservation-details-info.css']
})
export class ReservationDetailsInfo {

  constructor(public dialogRef: MatDialogRef<ReservationDetailsInfo>,
              @Inject(MAT_DIALOG_DATA) public data: ReservationModel) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
