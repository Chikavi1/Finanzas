import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecurrentPage } from './recurrent.page';

const routes: Routes = [
  {
    path: '',
    component: RecurrentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecurrentPageRoutingModule {}
