import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-popup',
  templateUrl: './confirmation-popup.html',
  styleUrls: ['./confirmation-popup.css']
})
export class ConfirmationPopup {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationPopup>,
    @Inject(MAT_DIALOG_DATA) public label: string) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
