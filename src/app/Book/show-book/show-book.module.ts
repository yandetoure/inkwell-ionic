import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowBookPageRoutingModule } from './show-book-routing.module';

import { ShowBookPage } from './show-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowBookPageRoutingModule
  ],
  declarations: [ShowBookPage]
})
export class ShowBookPageModule {}
