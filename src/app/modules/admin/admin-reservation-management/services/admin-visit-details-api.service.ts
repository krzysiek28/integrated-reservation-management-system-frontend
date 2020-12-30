import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppConsts} from '../../../../root/app-consts';
import {VisitDetailsModel} from '../../../../objects/models/VisitDetailsModel';
import {Observable} from 'rxjs';

@Injectable()
export class AdminVisitDetailsApiService {

  private readonly _url: string;

  constructor(private http: HttpClient) {
    this._url = AppConsts.SERVER_BASIC_URL + AppConsts.ADMIN_VISIT_DETAILS_MANAGEMENT_API_PATH;
  }

  public addVisitDetails(visitDetailsModel: VisitDetailsModel, reservationId: number): Observable<VisitDetailsModel> {
    let params = new HttpParams().set('reservationId', reservationId.toString());
    return this.http.post<VisitDetailsModel>(this._url + '/addVisitDetails', visitDetailsModel, {params: params});
  }
}
