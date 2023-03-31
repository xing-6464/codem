import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { CollectpageRoutingModule } from './collectpage-routing.module';
import { CollectpageComponent } from './collectpage.component';

@NgModule({
  declarations: [CollectpageComponent],
  imports: [CommonModule, CollectpageRoutingModule, NzButtonModule],
})
export class CollectpageModule {}
