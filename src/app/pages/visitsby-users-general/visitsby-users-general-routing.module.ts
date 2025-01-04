import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitsbyUsersGeneralPage } from './visitsby-users-general.page';

const routes: Routes = [
  {
    path: '',
    component: VisitsbyUsersGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitsbyUsersGeneralPageRoutingModule {}
