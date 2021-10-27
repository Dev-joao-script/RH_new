import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcedimentoLcPage } from './procedimento-lc.page';

const routes: Routes = [
  {
    path: '',
    component: ProcedimentoLcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcedimentoLcPageRoutingModule {}
