import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TestModel} from '../models/TestModel';
import {TextModel} from '../models/TextModel';

@Injectable()
export class TestService {

  private headers: HttpHeaders;
  private testUrl: string;

  constructor(private http: HttpClient) {
    this.testUrl = 'http://localhost:9500/testApi';
    this.headers = new HttpHeaders();
    this.headers.set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
  }

  public findAll(): Observable<TestModel[]> {
    return this.http.get<TestModel[]>(this.testUrl + '/tests', {headers: this.headers});
  }

  public save(test: TestModel) {
    return this.http.post<TestModel>(this.testUrl + '/tests', test, {headers: this.headers});
  }

  public getText(): Observable<TextModel> {
    return this.http.get<TextModel>(this.testUrl + '/text', {headers: this.headers});
  }
}
