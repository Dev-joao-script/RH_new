import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeriasPageRoutingModule } from './ferias-routing.module';

import { FeriasPage } from './ferias.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: FeriasPage
    }])
  ],
  declarations: [FeriasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class FeriasPageModule {}
