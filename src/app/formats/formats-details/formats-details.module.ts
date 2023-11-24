import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormatsDetailsPageRoutingModule } from './formats-details-routing.module';

import { FormatsDetailsPage } from './formats-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormatsDetailsPageRoutingModule
  ],
  declarations: [FormatsDetailsPage]
})
export class FormatsDetailsPageModule {}
