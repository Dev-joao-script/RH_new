import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionariosHEPage } from './funcionarios-he.page';

const routes: Routes = [
  {
    path: '',
    component: FuncionariosHEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionariosHEPageRoutingModule {}
