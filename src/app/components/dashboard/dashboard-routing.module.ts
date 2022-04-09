import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { DemandaComponent } from './demanda/demanda.component';
import { CasoComponent } from './caso/caso.component';
import { InformesComponent } from './informes/informes.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { NewDemandaComponent } from './new-demanda/new-demanda.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'demanda', component: DemandaComponent },
      { path: 'caso', component: CasoComponent },
      { path: 'informes', component: InformesComponent },
      { path: 'ayuda', component: AyudaComponent },
      { path: 'new-demanda', component: NewDemandaComponent },
      { path: 'profile', component: ProfileComponent },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
