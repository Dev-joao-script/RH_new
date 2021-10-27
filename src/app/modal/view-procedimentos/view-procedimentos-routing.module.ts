import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewProcedimentosPage } from './view-procedimentos.page';

const routes: Routes = [
  {
    path: '',
    component: ViewProcedimentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewProcedimentosPageRoutingModule {}
