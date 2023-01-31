import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsModalPage } from './authors-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AuthorsModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorsModalPageRoutingModule {}
