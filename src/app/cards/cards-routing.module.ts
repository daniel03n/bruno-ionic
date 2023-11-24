import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListPage } from './card-list/card-list.page';




const routes: Routes = [
  {
    path: '',
    component: CardListPage
  },

  {
    path: 'card-list',
    loadChildren: () => import('./card-list/card-list.module').then( m => m.CardListPageModule)
  },
  {
    path: 'cards/card-detail/:id',
    loadChildren: () => import('./card-detail/card-detail.module').then( m => m.CardDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsPageRoutingModule {}
