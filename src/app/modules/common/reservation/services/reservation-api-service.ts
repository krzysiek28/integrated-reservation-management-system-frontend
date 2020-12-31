import {Injectable} from '@angular/core';
import {AppConsts} from '../../../../root/app-consts';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ReservationModel} from '../../../../objects/models/ReservationModel';
import {Observable} from 'rxjs';
import {ReserveRequest} from '../objects/ReserveRequest';
import {ReservationStatus} from '../../../../objects/models/ReservationStatus';

@Injectable()
export class ReservationApiService {

  private readonly _url: string;

  constructor(private http: HttpClient) {
    this._url = AppConsts.SERVER_BASIC_URL + AppConsts.RESERVATION_API_PATH;
  }

  public changeReservationStatus(reservationId: number, reservationStatus: ReservationStatus): Observable<ReservationModel> {
    return this.http.patch<ReservationModel>(this._url + '/changeStatus/' + reservationId, reservationStatus.toString());
  }

  public getOwnReservations(userId: number): Observable<ReservationModel[]> {
    let params = new HttpParams().set('userId', userId.toString());
    return this.http.get<ReservationModel[]>(this._url + '/getOwnReservations', {params: params});
  }

  public getReservation(id: number): Observable<ReservationModel> {
    return this.http.get<ReservationModel>(this._url + '/reservation/' + id);
  }

  public reserve(reservationId: number, reserveRequest: ReserveRequest): Observable<ReservationModel> {
    return this.http.patch<ReservationModel>(this._url + '/reserve/' + reservationId, reserveRequest);
  }

  public findAvailableReservationsByDateRange(startDate: Date, endDate: Date): Observable<ReservationModel[]> {
    let params = new HttpParams()
      .set('startDate', startDate.toDateString())
      .set('endDate', endDate.toDateString());
    return this.http.get<ReservationModel[]>(this._url + '/availableReservationsByDateRange', {params: params});
  }
}
