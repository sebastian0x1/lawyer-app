import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { DemandaComponent } from './demanda/demanda.component';
import { CasoComponent } from './caso/caso.component';
import { NewDemandaComponent } from './new-demanda/new-demanda.component';
import { InformesComponent } from './informes/informes.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { AngularMaterialModule } from '../material_components/angular-material.module';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    InformesComponent,
    AyudaComponent,
    NavComponent,
    CasoComponent,
    DemandaComponent,
    NewDemandaComponent,
    ProfileComponent,


  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class DashboardModule { }
