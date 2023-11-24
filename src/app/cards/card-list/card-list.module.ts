import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Certifique-se de importar o HttpClientModule
import { IonicModule } from '@ionic/angular';

import { CardListPageRoutingModule } from './card-list-routing.module';

import { CardListPage } from './card-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardListPageRoutingModule,HttpClientModule
  ],
  declarations: [CardListPage]
})
export class CardListPageModule {}
