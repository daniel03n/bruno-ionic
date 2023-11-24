import { SubTypeListComponent } from './sub-type-list/sub-type-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubTypeDetailsComponent } from './sub-type-details/sub-type-details.component';



const routes: Routes = [
  {
    path: '',
    component: SubTypeListComponent
  },
  {
    path: 'details',
    component: SubTypeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubTypesPageRoutingModule {}
