import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JanPageRoutingModule } from './jan-routing.module';

import { JanPage } from './jan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JanPageRoutingModule
  ],
  declarations: [JanPage]
})
export class JanPageModule {}
