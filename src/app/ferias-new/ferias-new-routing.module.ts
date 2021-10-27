import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeriasNewPage } from './ferias-new.page';

const routes: Routes = [
  {
    path: '',
    component: FeriasNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeriasNewPageRoutingModule {}
