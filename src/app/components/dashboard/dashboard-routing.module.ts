import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { DemandasComponent } from './demandas/demandas.component';
import { CasosComponent } from './casos/casos.component';
import { InformesComponent } from './informes/informes.component';
import { AyudaComponent } from './ayuda/ayuda.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', component: InicioComponent },
      { path: 'demandas', component: DemandasComponent },
      { path: 'casos', component: CasosComponent },
      { path: 'informes', component: InformesComponent },
      { path: 'ayuda', component: AyudaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
