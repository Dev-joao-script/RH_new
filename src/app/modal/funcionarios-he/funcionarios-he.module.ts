import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuncionariosHEPageRoutingModule } from './funcionarios-he-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { FuncionariosHEPage } from './funcionarios-he.page';
import { RouterModule } from '@angular/router';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    BrMaskerModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: FuncionariosHEPage
    }])
  ],
  declarations: [FuncionariosHEPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class FuncionariosHEPageModule {}
