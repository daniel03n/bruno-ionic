import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormatsListPage } from './formats-list.page';

const routes: Routes = [
  {
    path: '',
    component: FormatsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormatsListPageRoutingModule {}
