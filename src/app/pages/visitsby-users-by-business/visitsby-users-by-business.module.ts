import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisitsbyUsersByBusinessPageRoutingModule } from './visitsby-users-by-business-routing.module';

import { VisitsbyUsersByBusinessPage } from './visitsby-users-by-business.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisitsbyUsersByBusinessPageRoutingModule
  ],
  declarations: [VisitsbyUsersByBusinessPage]
})
export class VisitsbyUsersByBusinessPageModule {}
