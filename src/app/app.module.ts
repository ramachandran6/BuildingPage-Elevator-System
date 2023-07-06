import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LiftPageComponent } from './lift-page/lift-page.component';
import { LoginPersonComponent } from './login-person/login-person.component';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'liftPage', component: LiftPageComponent },
  { path: 'loginPerson', component: LoginPersonComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginPageComponent,
    LiftPageComponent,
    LoginPersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    MatRadioModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
