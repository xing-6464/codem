import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectpageComponent } from './collectpage.component';

const routes: Routes = [
  {
    path: '',
    component: CollectpageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectpageRoutingModule {}
