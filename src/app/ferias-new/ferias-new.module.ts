import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeriasNewPageRoutingModule } from './ferias-new-routing.module';

import { FeriasNewPage } from './ferias-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FeriasNewPageRoutingModule
  ],
  declarations: [FeriasNewPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeriasNewPageModule {}
