import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroAdvertenciaPage } from './registro-advertencia.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroAdvertenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroAdvertenciaPageRoutingModule {}
