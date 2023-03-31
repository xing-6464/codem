import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'front',
    pathMatch: 'full',
  },
  {
    path: 'front',
    loadChildren: () =>
      import('./frontpage/frontpage.module').then((m) => m.FrontpageModule),
  },
  {
    path: 'edit',
    loadChildren: () =>
      import('./editpage/editpage.module').then((m) => m.EditpageModule),
  },
  {
    path: 'inquire',
    loadChildren: () =>
      import('./inquirepage/inquirepage.module').then(
        (m) => m.InquirepageModule
      ),
  },
  {
    path: 'collect',
    loadChildren: () =>
      import('./collectpage/collectpage.module').then(
        (m) => m.CollectpageModule
      ),
  },
  {
    path: 'add',
    loadChildren: () =>
      import('./addpage/addpage.module').then((m) => m.AddpageModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import('./notpage/notpage.module').then((m) => m.NotpageModule),
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
