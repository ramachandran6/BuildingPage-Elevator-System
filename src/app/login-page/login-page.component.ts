import { Component, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginServicesService } from '../login-services.service';
import { Route, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  @Output() out: EventEmitter<any> = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private logService: LoginServicesService,
    private route: Router
  ) {}

  loginForm = this.fb.group({
    BuildingName: ['', Validators.required],
  });
  BuildingName = '';
  NumberOfFloors = 0;
  onSubmitDetails() {
    if (this.loginForm.valid) {
      // this.http
      //   .get(
      //     `https://team4-api-naf.azurewebsites.net/getNumberOfFloors/${
      //       this.loginForm.value.BuildingName as string
      //     }`
      //   )
      //   .subscribe((val) => {
      //     console.log(val);
      //     this.BuildingName = this.loginForm.value.BuildingName as string;
      //     // this.out.emit({ buildingName, val });
      //     this.NumberOfFloors = val as number;
      //   });
      // this.route.navigate(['/liftPage']);
      this.logService.onSubmitLoginDetails(this.loginForm.value.BuildingName as string);
    }
  }
}
