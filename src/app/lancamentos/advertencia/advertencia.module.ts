import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertenciaPageRoutingModule } from './advertencia-routing.module';

import { AdvertenciaPage } from './advertencia.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMaskerModule,
    ReactiveFormsModule,
    AdvertenciaPageRoutingModule
  ],
  declarations: [AdvertenciaPage]
})
export class AdvertenciaPageModule {}
