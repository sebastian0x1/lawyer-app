import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DemandasComponent } from './demandas/demandas.component';
import { CasosComponent } from './casos/casos.component';
import { InformesComponent } from './informes/informes.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { AngularMaterialModule } from '../material_components/angular-material.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    SidebarComponent,
    DemandasComponent,
    CasosComponent,
    InformesComponent,
    AyudaComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AngularMaterialModule
  ]
})
export class DashboardModule { }
