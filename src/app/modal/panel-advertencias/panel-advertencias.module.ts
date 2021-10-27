import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelAdvertenciasPageRoutingModule } from './panel-advertencias-routing.module';

import { PanelAdvertenciasPage } from './panel-advertencias.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: PanelAdvertenciasPage,
    }])
  ],
  declarations: [PanelAdvertenciasPage]
})
export class PanelAdvertenciasPageModule {}
