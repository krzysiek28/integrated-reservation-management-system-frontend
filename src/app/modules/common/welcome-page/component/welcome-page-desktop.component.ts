import {Component, OnInit} from '@angular/core';
import {TestModel} from '../../../../tmp/models/TestModel';
import {TestService} from '../../../../tmp/services/TestService';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-welcome-page-desktop',
  templateUrl: './welcome-page-desktop.component.html',
  styleUrls: ['./welcome-page-desktop.component.css']
})
export class WelcomePageDesktopComponent implements OnInit {

  test: TestModel[];
  testInp: TestModel;
  text: string;

  constructor(private _testService: TestService,
              private route: ActivatedRoute,
              private router: Router,) {
    this.testInp = new TestModel();
  }

  ngOnInit() {
    this.findAllTest()
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
