import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelAtestadosPage } from './panel-atestados.page';

const routes: Routes = [
  {
    path: '',
    component: PanelAtestadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelAtestadosPageRoutingModule {}
