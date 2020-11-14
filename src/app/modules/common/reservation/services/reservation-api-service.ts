import {Injectable} from '@angular/core';
import {AppConsts} from '../../../../root/app-consts';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ReservationModel} from '../../../../objects/models/ReservationModel';
import {Observable} from 'rxjs';

@Injectable()
export class ReservationApiService {

  private readonly _url: string;

  constructor(private http: HttpClient) {
    this._url = AppConsts.SERVER_BASIC_URL + AppConsts.RESERVATION_API_PATH;
  }

  public deleteReservation(reservationId: number) {
    return this.http.delete<number>(this._url + '/reservation/' + reservationId);
  }

  public findAvailableReservationsByDateRange(startDate: Date, endDate: Date): Observable<ReservationModel[]> {
    let params = new HttpParams()
      .set('startDate', startDate.toDateString())
      .set('endDate', endDate.toDateString());
    return this.http.get<ReservationModel[]>(this._url + '/availableReservationsByDateRange', {params: params});
  }
}
