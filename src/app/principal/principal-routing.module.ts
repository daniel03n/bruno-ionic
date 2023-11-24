import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: ApresentacaoComponent,
  },
  {
    path: '',
    component: ApresentacaoComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cards',
    loadChildren: () => import('../cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'sets',
    loadChildren: () => import('../sets/sets.module').then( m => m.SetsPageModule)
  },
  {
    path: 'types',
    loadChildren: () => import('../types/types.module').then( m => m.TypesPageModule)
  },
  {
    path: 'sub-types',
    loadChildren: () => import('../sub-types/sub-types.module').then( m => m.SubTypesPageModule)
  },
  {
    path: 'formats',
    loadChildren: () => import('../formats/formats.module').then( m => m.FormatsPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalPageRoutingModule {}
