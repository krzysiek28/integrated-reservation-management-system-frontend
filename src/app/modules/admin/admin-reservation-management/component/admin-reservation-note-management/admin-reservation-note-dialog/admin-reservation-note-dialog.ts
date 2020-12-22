import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ReservationModel} from '../../../../../../objects/models/ReservationModel';

@Component({
  selector: 'app-admin-reservation-note-dialog',
  templateUrl: './admin-reservation-note-dialog.html',
  styleUrls: ['./admin-reservation-note-dialog.css']
})
export class AdminReservationNoteDialog {

  constructor(
    public dialogRef: MatDialogRef<AdminReservationNoteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ReservationModel) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
