import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormatsListPageRoutingModule } from './formats-list-routing.module';

import { FormatsListPage } from './formats-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormatsListPageRoutingModule
  ],
  declarations: [FormatsListPage]
})
export class FormatsListPageModule {}
