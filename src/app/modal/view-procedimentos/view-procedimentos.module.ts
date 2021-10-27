import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewProcedimentosPageRoutingModule } from './view-procedimentos-routing.module';

import { ViewProcedimentosPage } from './view-procedimentos.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: ViewProcedimentosPage
    }])
  ],
  declarations: [ViewProcedimentosPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class ViewProcedimentosPageModule {}
