import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConsts} from '../../root/app-consts';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _url: string;

  constructor(private http: HttpClient) {
    this._url = AppConsts.SERVER_BASIC_URL + AppConsts.AUTH_API;
  }

  login(credentials): Observable<any> {
    return this.http.post(this._url + '/signIn', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(this._url + '/signUp', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
