import {Injectable} from '@angular/core';
import {AppContext} from './AppContext';
import {ApplicationVariant} from '../root/app-consts';

@Injectable()
export class AppContextService {

  private _appContext: AppContext;

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
}
