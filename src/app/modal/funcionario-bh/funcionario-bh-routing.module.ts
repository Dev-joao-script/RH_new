import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionarioBhPage } from './funcionario-bh.page';

const routes: Routes = [
  {
    path: '',
    component: FuncionarioBhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionarioBhPageRoutingModule {}
