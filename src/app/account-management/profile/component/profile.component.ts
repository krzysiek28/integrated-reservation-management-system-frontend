import { Component, OnInit } from '@angular/core';
import {AppContextService} from '../../../context/app-context.service';
import {LoggedUserModel} from '../../objects/LoggedUserModel';

@Component({
  selector: 'app-profile-desktop',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userModel: LoggedUserModel;

  constructor(private _appContext: AppContextService) { }

  ngOnInit(): void {
    if(this._appContext.hasUserContext()) {
      this.userModel = this._appContext.getUser();
    }
  }

}
