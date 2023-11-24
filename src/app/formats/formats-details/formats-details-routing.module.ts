import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormatsDetailsPage } from './formats-details.page';

const routes: Routes = [
  {
    path: '',
    component: FormatsDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormatsDetailsPageRoutingModule {}
