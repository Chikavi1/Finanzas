import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilteredMovementsPage } from './filtered-movements.page';

const routes: Routes = [
  {
    path: '',
    component: FilteredMovementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilteredMovementsPageRoutingModule {}
