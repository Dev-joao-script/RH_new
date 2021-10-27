import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtestadosPageRoutingModule } from './atestados-routing.module';
import { BrMaskerModule } from 'br-mask';

import { AtestadosPage } from './atestados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrMaskerModule,
    ReactiveFormsModule,
    AtestadosPageRoutingModule
  ],
  declarations: [AtestadosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AtestadosPageModule {}
