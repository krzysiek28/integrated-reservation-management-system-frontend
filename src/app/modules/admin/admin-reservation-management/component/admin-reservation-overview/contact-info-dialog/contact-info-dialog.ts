import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PersonalDataModel} from '../../../../../../objects/models/PersonalDataModel';

@Component({
  selector: 'app-contact-info-dialog',
  templateUrl: './contact-info-dialog.html',
  styleUrls: ['./contact-info-dialog.css']
})
export class ContactInfoDialog {

  constructor(
    public dialogRef: MatDialogRef<ContactInfoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: PersonalDataModel) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
