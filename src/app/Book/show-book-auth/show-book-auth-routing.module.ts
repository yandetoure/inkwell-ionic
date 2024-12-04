import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowBookAuthPage } from './show-book-auth.page';

const routes: Routes = [
  {
    path: '',
    component: ShowBookAuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowBookAuthPageRoutingModule {}
