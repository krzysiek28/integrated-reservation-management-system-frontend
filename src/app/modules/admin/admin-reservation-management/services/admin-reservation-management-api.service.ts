import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppConsts} from '../../../../root/app-consts';
import {ReservationModel} from '../../../../objects/models/ReservationModel';
import {Observable} from 'rxjs';

@Injectable()
export class AdminReservationManagementApiService {

  private readonly _url: string;

  constructor(private http: HttpClient) {
    this._url = AppConsts.SERVER_BASIC_URL + AppConsts.ADMIN_RESERVATION_MANAGEMENT_API_PATH;
  }

  public addReservation(reservation: ReservationModel) {
    return this.http.post<ReservationModel>(this._url + '/reservation', reservation);
  }

  public addReservations(reservations: Array<ReservationModel>) {
    return this.http.post<Array<ReservationModel>>(this._url + '/reservations', reservations);
  }

  public fetchReservationsByDate(date: Date): Observable<ReservationModel[]> {
    let params = new HttpParams().set('date', new Date(date).toDateString());
    return this.http.get<ReservationModel[]>(this._url + '/reservationsByDate', {params: params});
  }
}
