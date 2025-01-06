import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexPageRoutingModule } from './index-routing.module';

import { IndexPage } from './index.page';
import { EmojiComponent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PickerComponent,
    EmojiComponent,
    IonicModule,
    IndexPageRoutingModule
  ],
  declarations: [IndexPage]
})
export class IndexPageModule {}
