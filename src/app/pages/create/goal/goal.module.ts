import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalPageRoutingModule } from './goal-routing.module';

import { GoalPage } from './goal.page';
import { EmojiComponent } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';

@NgModule({
  imports: [
    CommonModule,
    PickerComponent,
    EmojiComponent,
    FormsModule,
    IonicModule,
    GoalPageRoutingModule
  ],
  declarations: [GoalPage]
})
export class GoalPageModule {}
