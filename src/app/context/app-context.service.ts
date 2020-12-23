import {Injectable} from '@angular/core';
import {ApplicationVariant} from '../root/app-consts';
import {TokenStorageService} from '../account-management/services/token-storage.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {LoggedUserModel} from '../account-management/objects/LoggedUserModel';

@Injectable()
export class AppContextService {

  constructor(private _tokenStorageService: TokenStorageService) {
  }

  get applicationVariant(): ApplicationVariant {
    if (this._tokenStorageService.getUser()?.role === 'ROLE_USER') {
      return ApplicationVariant.LOGGED_AS_USER;
    } else if (this._tokenStorageService.getUser()?.role === 'ROLE_ADMIN') {
      return ApplicationVariant.LOGGED_AS_ADMIN;
    } else {
      return ApplicationVariant.NO_CONTEXT;
    }
  }

  public isNoContext(): boolean {
    return ApplicationVariant.NO_CONTEXT === this.applicationVariant;
  }

  public isLoggedAsAdmin(): boolean {
    return ApplicationVariant.LOGGED_AS_ADMIN === this.applicationVariant;
  }

  public isLoggedAsUser(): boolean {
    return ApplicationVariant.LOGGED_AS_USER === this.applicationVariant;
  }

  public hasUserContext(): boolean {
    return isNotNullOrUndefined(this._tokenStorageService.getUser());
  }

  public getUser(): LoggedUserModel {
    return this._tokenStorageService.getUser();
  }
}
