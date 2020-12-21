import {Injectable} from '@angular/core';
import {AppContext} from './AppContext';
import {ApplicationVariant} from '../root/app-consts';
import {TokenStorageService} from '../account-management/services/token-storage.service';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';
import {LoggedUserModel} from '../account-management/objects/LoggedUserModel';

@Injectable()
export class AppContextService {

  private _appContext: AppContext;

  constructor(private _tokenStorageService: TokenStorageService) {
  }

  get appContext(): AppContext {
    return this._appContext;
  }

  set appContext(appContext: AppContext) {
    this._appContext = appContext;
  }

  public isNoContext(): boolean {
    return ApplicationVariant.NO_CONTEXT === this.appContext.applicationVariant;
  }

  public isLoggedAsAdmin(): boolean {
    return ApplicationVariant.LOGGED_AS_ADMIN === this.appContext.applicationVariant;
  }

  public isLoggedAsUser(): boolean {
    return ApplicationVariant.LOGGED_AS_USER === this.appContext.applicationVariant;
  }

  public hasUserContext(): boolean {
    return isNotNullOrUndefined(this._tokenStorageService.getUser());
  }

  public getUser(): LoggedUserModel {
    return this._tokenStorageService.getUser();
  }
}
