import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AppContextService} from '../../../../context/app-context.service';

@Component({
  selector: 'app-reservation-desktop',
  templateUrl: './reservation-desktop.component.html',
  styleUrls: ['./reservation-desktop.component.css']
})
export class ReservationDesktopComponent implements OnInit {

  formGroup: FormGroup;
  isUserLogged: boolean = false;
  selectedTab = new FormControl(0);

  constructor(private _appContext: AppContextService) {
    this.isUserLogged = _appContext.isLoggedAsUser();
  }

  ngOnInit(): void {
  }
}
