import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilteredMovementsPageRoutingModule } from './filtered-movements-routing.module';

import { FilteredMovementsPage } from './filtered-movements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilteredMovementsPageRoutingModule
  ],
  declarations: [FilteredMovementsPage]
})
export class FilteredMovementsPageModule {}
