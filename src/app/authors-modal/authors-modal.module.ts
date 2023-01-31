import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthorsModalPageRoutingModule } from './authors-modal-routing.module';

import { AuthorsModalPage } from './authors-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthorsModalPageRoutingModule
  ],
  declarations: [AuthorsModalPage]
})
export class AuthorsModalPageModule {}
