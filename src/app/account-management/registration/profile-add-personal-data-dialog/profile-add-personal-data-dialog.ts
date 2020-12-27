import {Component, Inject, OnInit} from '@angular/core';
import {ProfileControlNames} from '../../profile/utils/profile-form-consts';
import {FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PersonalDataModel} from '../../../objects/models/PersonalDataModel';
import {ProfileFormGenerator} from '../../profile/utils/profile-form-generator';

@Component({
  selector: 'app-profile-add-personal-data-dialog',
  templateUrl: './profile-add-personal-data-dialog.html',
  styleUrls: ['./profile-add-personal-data-dialog.css']
})
export class ProfileAddPersonalDataDialog {

  profileControlNames = ProfileControlNames;
  personalDataFormGroup: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ProfileAddPersonalDataDialog>,
    @Inject(MAT_DIALOG_DATA) public personalDataModel: PersonalDataModel) {
    this.personalDataFormGroup = ProfileFormGenerator.generateSearchReservationFormGroup(personalDataModel);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
