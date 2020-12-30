import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PersonalDataModel} from '../../../../objects/models/PersonalDataModel';
import {FormGroup} from '@angular/forms';
import {ProfileFormGenerator} from '../../utils/profile-form-generator';
import {ProfileControlNames} from '../../utils/profile-form-consts';

@Component({
  selector: 'app-profile-edit-personal-data-dialog',
  templateUrl: './profile-edit-personal-data-dialog.html',
  styleUrls: ['./profile-edit-personal-data-dialog.css']
})
export class ProfileEditPersonalDataDialog {

  profileControlNames = ProfileControlNames;
  personalDataFormGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ProfileEditPersonalDataDialog>,
    @Inject(MAT_DIALOG_DATA) public personalDataModel: PersonalDataModel) {
    this.personalDataFormGroup = ProfileFormGenerator.generateSearchReservationFormGroup(personalDataModel);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
