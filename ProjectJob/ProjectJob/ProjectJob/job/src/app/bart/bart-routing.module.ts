import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BartPage } from './bart.page';

const routes: Routes = [
  {
    path: '',
    component: BartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BartPageRoutingModule {}
