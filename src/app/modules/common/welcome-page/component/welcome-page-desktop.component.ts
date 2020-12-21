import {Component, OnInit} from '@angular/core';
import {TestModel} from '../../../../tmp/models/TestModel';
import {TestService} from '../../../../tmp/services/TestService';
import {ActivatedRoute, Router} from '@angular/router';
import {TokenStorageService} from '../../../../account-management/services/token-storage.service';
import {LoggedUserModel} from '../../../../account-management/objects/LoggedUserModel';
import {AppContext} from '../../../../context/AppContext';
import {AppContextService} from '../../../../context/app-context.service';

@Component({
  selector: 'app-welcome-page-desktop',
  templateUrl: './welcome-page-desktop.component.html',
  styleUrls: ['./welcome-page-desktop.component.css']
})
export class WelcomePageDesktopComponent implements OnInit {

  test: TestModel[];
  testInp: TestModel;
  text: string;
  userModel: LoggedUserModel;

  constructor(private _testService: TestService,
              private route: ActivatedRoute,
              private router: Router,
              private _appContext: AppContextService) {
    this.testInp = new TestModel();
  }

  ngOnInit() {
    this.findAllTest();
    if(this._appContext.hasUserContext()){
      this.userModel = this._appContext.getUser();
    }
  }

  findAllTest() {
    this._testService.findAll().subscribe(data => {
      this.test = data;
    });
  }

  onSubmit() {
    this._testService.save(this.testInp).subscribe(() => this.findAllTest());
  }

  getText() {
     this._testService.getText().subscribe(response => {
       this.text = response.text
       this.findAllTest()
     });
  }
}
