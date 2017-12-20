import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { appRoutingModule } from './app.routing';
import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store/src/store_module';
import { reducers } from '../store/reducers/index';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({'products': reducers}),
    BrowserAnimationsModule,
    appRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
