import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroAdvertenciaPageRoutingModule } from './registro-advertencia-routing.module';

import { RegistroAdvertenciaPage } from './registro-advertencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistroAdvertenciaPageRoutingModule
  ],
  declarations: [RegistroAdvertenciaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class RegistroAdvertenciaPageModule {}
