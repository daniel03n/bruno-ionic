import { TypeDetailsComponent } from './type-details/type-details.component';
import { TypeListComponent } from './type-list/type-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: TypeListComponent
  },
  {
    path: 'details',
    component: TypeDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypesPageRoutingModule {}
