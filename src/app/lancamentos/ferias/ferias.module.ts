import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeriasPageRoutingModule } from './ferias-routing.module';

import { FeriasPage } from './ferias.page';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([{
      path: '',
      component: FeriasPage
    }])
  ],
  declarations: [FeriasPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class FeriasPageModule {}
