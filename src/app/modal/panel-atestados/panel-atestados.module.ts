import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelAtestadosPageRoutingModule } from './panel-atestados-routing.module';

import { PanelAtestadosPage } from './panel-atestados.page';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: PanelAtestadosPage
    }])
  ],
  declarations: [PanelAtestadosPage]
})
export class PanelAtestadosPageModule {}
