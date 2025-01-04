import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovementPageRoutingModule } from './movement-routing.module';

import { MovementPage } from './movement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovementPageRoutingModule
  ],
  declarations: [MovementPage]
})
export class MovementPageModule {}
