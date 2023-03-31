import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotpageComponent } from './notpage.component';

import { NotpageRoutingModule } from './notpage-routing.module';

@NgModule({
  declarations: [NotpageComponent],
  imports: [CommonModule, NotpageRoutingModule],
})
export class NotpageModule {}
