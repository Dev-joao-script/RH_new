import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";
import { IonicModule } from '@ionic/angular';

import { GestaoPageRoutingModule } from './gestao-routing.module';

import { GestaoPage } from './gestao.page';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    HttpClientModule,
    GestaoPageRoutingModule
  ],
  declarations: [GestaoPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})
export class GestaoPageModule {}
