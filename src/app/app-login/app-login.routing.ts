import { AppLoginComponent } from './app-login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appLoginRoutes: Routes = [
    {
        path: 'login',
        component: AppLoginComponent
    }
];

export const AppLoginRoutingModule: ModuleWithProviders = RouterModule.forChild(appLoginRoutes);
