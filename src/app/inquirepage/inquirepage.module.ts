import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { InquirepageRoutingModule } from './inquirepage-routing.module';
import { InquirepageComponent } from './inquirepage.component';

@NgModule({
  declarations: [InquirepageComponent],
  imports: [
    CommonModule,
    InquirepageRoutingModule,
    NzInputModule,
    NzButtonModule,
  ],
})
export class InquirepageModule {}
