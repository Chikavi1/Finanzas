import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecurrentPageRoutingModule } from './recurrent-routing.module';

import { RecurrentPage } from './recurrent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecurrentPageRoutingModule
  ],
  declarations: [RecurrentPage]
})
export class RecurrentPageModule {}
