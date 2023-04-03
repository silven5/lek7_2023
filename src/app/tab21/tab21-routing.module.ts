import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab21Page } from './tab21.page';

const routes: Routes = [
  {
    path: '',
    component: Tab21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab21PageRoutingModule {}
