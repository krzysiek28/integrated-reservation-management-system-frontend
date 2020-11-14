import {ApplicationVariant} from '../root/app-consts';

export class AppContext {

  private _applicationVariant: ApplicationVariant;

  constructor() {
    this._applicationVariant = ApplicationVariant.NO_CONTEXT;
  }

  get applicationVariant(): ApplicationVariant {
    return this._applicationVariant;
  }

  set applicationVariant(applicationVariant: ApplicationVariant) {
    this._applicationVariant = applicationVariant;
  }
}
