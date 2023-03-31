import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { FrontpageRoutingModule } from './frontpage-routing.module';
import { FrontpageComponent } from './frontpage.component';

@NgModule({
  declarations: [FrontpageComponent],
  imports: [CommonModule, FrontpageRoutingModule, NzButtonModule],
})
export class FrontpageModule {}
