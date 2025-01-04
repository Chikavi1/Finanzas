import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisitsbyUsersByBusinessPage } from './visitsby-users-by-business.page';

const routes: Routes = [
  {
    path: '',
    component: VisitsbyUsersByBusinessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitsbyUsersByBusinessPageRoutingModule {}
