import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { DemandasComponent } from './demandas/demandas.component';
import { CasosComponent } from './casos/casos.component';
import { InformesComponent } from './informes/informes.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { AngularMaterialModule } from '../material_components/angular-material.module';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    DemandasComponent,
    CasosComponent,
    InformesComponent,
    AyudaComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule,
    LayoutModule,


  ]
})
export class DashboardModule { }
