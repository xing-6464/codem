import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotpageComponent } from './notpage.component';

const routes: Routes = [
  {
    path: '',
    component: NotpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotpageRoutingModule {}
