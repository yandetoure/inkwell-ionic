import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowBookAuthPageRoutingModule } from './show-book-auth-routing.module';

import { ShowBookAuthPage } from './show-book-auth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowBookAuthPageRoutingModule
  ],
  declarations: [ShowBookAuthPage]
})
export class ShowBookAuthPageModule {}
