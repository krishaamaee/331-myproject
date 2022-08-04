import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BartPageRoutingModule } from './bart-routing.module';

import { BartPage } from './bart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BartPageRoutingModule
  ],
  declarations: [BartPage]
})
export class BartPageModule {}
