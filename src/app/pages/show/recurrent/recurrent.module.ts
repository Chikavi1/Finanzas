import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecurrentPageRoutingModule } from './recurrent-routing.module';

import { RecurrentPage } from './recurrent.page';
import { EmojiComponent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickerComponent,
    EmojiComponent,
    RecurrentPageRoutingModule
  ],
  declarations: [RecurrentPage]
})
export class RecurrentPageModule {}
