import {Component, OnInit} from '@angular/core';
import {AppContextService} from '../../../context/app-context.service';
import {LoggedUserModel} from '../../objects/LoggedUserModel';
import {UserApiService} from '../services/user-api-service';
import {UserModel} from '../../../objects/models/UserModel';
import {MatDialog} from '@angular/material/dialog';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {ProfileEditPersonalDataDialog} from './profile-edit-personal-data-dialog/profile-edit-personal-data-dialog';
import {PersonalDataModel} from '../../../objects/models/PersonalDataModel';

@Component({
  selector: 'app-profile-desktop',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedUserModel: LoggedUserModel;
  userModel: UserModel;

  constructor(private _appContext: AppContextService,
              private _userApi: UserApiService,
              private _dialog: MatDialog) {
  }

  ngOnInit(): void {
    if (this._appContext.hasUserContext()) {
      this.loggedUserModel = this._appContext.getUser();
      this._userApi.getUserById(this.loggedUserModel.id).subscribe(response => {
        this.userModel = response;
      });
    }
  }

  openEditPersonalDataDialog(): void {
    const dialogRef = this._dialog.open(ProfileEditPersonalDataDialog, {
      width: '500px',
      data: this.userModel.personalData ? this.userModel.personalData : new PersonalDataModel()
    });

    dialogRef.afterClosed().subscribe(result => {
      if (isNotNullOrUndefined(result)) {
        this._userApi.updateUserPersonalData(this.userModel.id, result).subscribe(() => {
          this._userApi.getUserById(this.userModel.id).subscribe(result => {
            this.userModel = result;
          });
        }, error => console.log('error occured: ', error));
      }
    });
  }
}
