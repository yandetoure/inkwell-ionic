import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowBookPage } from './show-book.page';

const routes: Routes = [
  {
    path: '',
    component: ShowBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowBookPageRoutingModule {}
