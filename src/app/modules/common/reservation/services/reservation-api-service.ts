import {Injectable} from '@angular/core';
import {AppConsts} from '../../../../root/app-consts';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ReservationModel} from '../../../../objects/models/ReservationModel';
import {Observable} from 'rxjs';
import {PersonalDataModel} from '../../../../objects/models/PersonalDataModel';
import {ReserveRequest} from '../objects/ReserveRequest';

@Injectable()
export class ReservationApiService {

  private readonly _url: string;

  constructor(private http: HttpClient) {
    this._url = AppConsts.SERVER_BASIC_URL + AppConsts.RESERVATION_API_PATH;
  }

  public deleteReservation(reservationId: number) {
    return this.http.delete<number>(this._url + '/reservation/' + reservationId);
  }

  public getReservation(id: number): Observable<ReservationModel> {
    return this.http.get<ReservationModel>(this._url + '/reservation/' + id);
  }

  public reserve(reservationId: number, reserveRequest: ReserveRequest): Observable<ReservationModel> {
    return this.http.put<ReservationModel>(this._url + '/reserve/' + reservationId, reserveRequest);
  }

  public findAvailableReservationsByDateRange(startDate: Date, endDate: Date): Observable<ReservationModel[]> {
    let params = new HttpParams()
      .set('startDate', startDate.toDateString())
      .set('endDate', endDate.toDateString());
    return this.http.get<ReservationModel[]>(this._url + '/availableReservationsByDateRange', {params: params});
  }
}
