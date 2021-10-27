import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionarioBhPageRoutingModule } from './funcionario-bh-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FuncionarioBhPage } from './funcionario-bh.page';
import { BrMaskerModule } from 'br-mask';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    IonicModule,
    ReactiveFormsModule,
    BrMaskerModule,
    RouterModule.forChild([{
      path: '',
      component: FuncionarioBhPage
    }])
  ],
  declarations: [FuncionarioBhPage]
})
export class FuncionarioBhPageModule {}
