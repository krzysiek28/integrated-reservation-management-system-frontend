import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ReservationModel} from '../../../../../../objects/models/ReservationModel';

@Component({
  selector: 'admin-reservation-add-dialog',
  templateUrl: 'admin-reservation-add-dialog.html',
  styleUrls: ['./admin-reservation-add-dialog.css']
})
export class AdminReservationAddDialog {

  constructor(
    public dialogRef: MatDialogRef<AdminReservationAddDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ReservationModel) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
