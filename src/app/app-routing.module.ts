import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { VerifyGuard } from './guards/verifyToken.guard';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', canActivate: [VerifyGuard], loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule) },
  { path: 'dashboard-admin', canActivate: [VerifyGuard], loadChildren: () => import('./components/dashboard-admin/dashboard-admin.module').then(x => x.DashboardAdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
