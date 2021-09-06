import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendenciasPageRoutingModule } from './pendencias-routing.module';

import { PendenciasPage } from './pendencias.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    PendenciasPageRoutingModule
  ],
  declarations: [PendenciasPage]
})
export class PendenciasPageModule {}
