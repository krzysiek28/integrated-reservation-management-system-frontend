import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppConsts} from '../../root/app-consts';
import {RegistrationRequest} from '../objects/RegistrationRequest';
import {LoginRequest} from '../objects/LoginRequest';

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

  login(credentials: LoginRequest): Observable<any> {
    return this.http.post(this._url + '/signIn', {
      userName: credentials.userName,
      password: credentials.password
    }, httpOptions);
  }

  register(user: RegistrationRequest): Observable<any> {
    return this.http.post(this._url + '/signUp',{
      userName: user.userName,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
