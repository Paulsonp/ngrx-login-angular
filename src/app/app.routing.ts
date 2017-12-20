import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '', component: AppLayoutComponent, canActivate: [AuthGuard],
        children: [
          {
            path: 'home',
            loadChildren: 'app/app-home/app-home.module#AppHomeModule'
          }
        ],
      },
      { path: 'login', component: AppLoginComponent}
    //   , canActivate: [UnauthenticatedGuard]
  ];



export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { enableTracing: false });
