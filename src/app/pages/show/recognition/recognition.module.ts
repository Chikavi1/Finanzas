import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecognitionPageRoutingModule } from './recognition-routing.module';

import { RecognitionPage } from './recognition.page';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';
import { EmojiComponent } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickerComponent,
    EmojiComponent,
    RecognitionPageRoutingModule
  ],
  declarations: [RecognitionPage]
})
export class RecognitionPageModule {}
