import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { DashboardAdminComponent } from './dashboard-admin.component';
//import { InicioComponent } from './inicio/inicio.component';
import { AngularMaterialModule } from '../material_components/angular-material.module';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NewUserComponent } from './new-user/new-user.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
    declarations: [
        DashboardAdminComponent,
        NavComponent,
        NewUserComponent,
        UserListComponent,

    ],
    imports: [
        CommonModule,
        DashboardAdminRoutingModule,
        AngularMaterialModule,
        LayoutModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
    ]
})
export class DashboardAdminModule { }
