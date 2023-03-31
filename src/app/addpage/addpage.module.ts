import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { AddpageRoutingModule } from './addpage-routing.module';
import { AddpageComponent } from './addpage.component';

@NgModule({
  declarations: [AddpageComponent],
  imports: [
    CommonModule,
    AddpageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzMessageModule,
    NzFormModule,
    NzSelectModule,
    NzRadioModule,
    NzButtonModule,
    NzDatePickerModule,
  ],
})
export class AddpageModule {}
