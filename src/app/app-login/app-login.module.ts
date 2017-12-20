import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoginComponent } from './app-login.component';
import { AppLoginRoutingModule } from './app-login.routing';


@NgModule({
  imports: [
    AppLoginRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppLoginComponent
  ]
})

export class AppLoginModule { }
