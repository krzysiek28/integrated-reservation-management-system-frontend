import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoggedUserModel} from '../../../../account-management/objects/LoggedUserModel';
import {AppContextService} from '../../../../context/app-context.service';

@Component({
  selector: 'app-welcome-page-desktop',
  templateUrl: './welcome-page-desktop.component.html',
  styleUrls: ['./welcome-page-desktop.component.css']
})
export class WelcomePageDesktopComponent implements OnInit {

  userModel: LoggedUserModel;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _appContext: AppContextService) {
  }

  ngOnInit() {
    if(this._appContext.hasUserContext()){
      this.userModel = this._appContext.getUser();
    }
  }
}
