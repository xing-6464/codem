import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpageComponent } from './addpage.component';

const routes: Routes = [
  {
    path: '',
    component: AddpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddpageRoutingModule {}
