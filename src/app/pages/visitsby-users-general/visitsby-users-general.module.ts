import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitsbyUsersGeneralPageRoutingModule } from './visitsby-users-general-routing.module';

import { VisitsbyUsersGeneralPage } from './visitsby-users-general.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitsbyUsersGeneralPageRoutingModule
  ],
  declarations: [VisitsbyUsersGeneralPage]
})
export class VisitsbyUsersGeneralPageModule {}
