import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelAdvertenciasPage } from './panel-advertencias.page';

const routes: Routes = [
  {
    path: '',
    component: PanelAdvertenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelAdvertenciasPageRoutingModule {}
