import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ReservationModel} from '../../../../../../objects/models/ReservationModel';

@Component({
  selector: 'app-admin-reservations-add-dialog',
  templateUrl: './admin-reservations-add-dialog.html',
  styleUrls: ['./admin-reservations-add-dialog.css']
})
export class AdminReservationsAddDialog {

  constructor(
    public dialogRef: MatDialogRef<AdminReservationsAddDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ReservationModel) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
