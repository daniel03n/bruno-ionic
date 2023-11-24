import { FormatsDetailsPage } from './formats-details/formats-details.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormatsListPage } from './formats-list/formats-list.page';



const routes: Routes = [
  {
    path: '',
    component: FormatsListPage
  },
  {
    path: 'details',
    component: FormatsDetailsPage
  },

  {
    path: 'formats-list',
    loadChildren: () => import('./formats-list/formats-list.module').then( m => m.FormatsListPageModule)
  },
  {
    path: 'formats-details',
    loadChildren: () => import('./formats-details/formats-details.module').then( m => m.FormatsDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormatsPageRoutingModule {}
