import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcedimentoLcPageRoutingModule } from './procedimento-lc-routing.module';

import { ProcedimentoLcPage } from './procedimento-lc.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: ProcedimentoLcPage
    }])
  ],
  declarations: [ProcedimentoLcPage]
})
export class ProcedimentoLcPageModule {}
