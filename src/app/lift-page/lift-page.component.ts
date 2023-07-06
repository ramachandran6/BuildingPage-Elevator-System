import { Component, Input, ViewChild } from '@angular/core';
import { LoginServicesService } from '../login-services.service';
import { LoginPageComponent } from '../login-page/login-page.component';
@Component({
  selector: 'app-lift-page',
  templateUrl: './lift-page.component.html',
  styleUrls: ['./lift-page.component.scss'],
})
export class LiftPageComponent {
  constructor(private LogService: LoginServicesService) {}
  // @Input('newItemEvent') det: any;
  // @ViewChild(LoginPageComponent) loginPage: any;
  // // onSubmitDetails(newItem: any) {
  // //   console.log(newItem.BuildingName + ',' + newItem.NumberOfFloors);
  // // }
  // BuildingName = '';
  // NumberOfFloors = 0;
  // ngAfterViewInit() {
  //   this.BuildingName = this.loginPage.BuildingName;
  //   this.NumberOfFloors = this.loginPage.NumberOfFloors;
  // }
  BuildingName = this.LogService.BuildingName;
  NumberOfFloors = this.LogService.NumberOfFloors;
}
