import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquirepageComponent } from './inquirepage.component';

const routes: Routes = [
  {
    path: '',
    component: InquirepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InquirepageRoutingModule {}
