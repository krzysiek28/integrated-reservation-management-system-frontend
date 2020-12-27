import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConsts} from '../../../root/app-consts';
import {Observable} from 'rxjs';
import {UserModel} from '../../../objects/models/UserModel';
import {PersonalDataModel} from '../../../objects/models/PersonalDataModel';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  private readonly _url: string;

  constructor(private http: HttpClient) {
    this._url = AppConsts.SERVER_BASIC_URL + AppConsts.USER_API;
  }

  public getUserById(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(this._url + '/user/' + id);
  }

  public updateUserPersonalData(id: number, personalDataModel: PersonalDataModel): Observable<UserModel> {
    return this.http.put<UserModel>(this._url + '/user/' + id + '/updateUserPersonalData', personalDataModel);
  }
}
