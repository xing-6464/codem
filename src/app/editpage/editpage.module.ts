import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { EditpageRoutingModule } from './editpage-routing.module';
import { EditpageComponent } from './editpage.component';

@NgModule({
  declarations: [EditpageComponent],
  imports: [
    CommonModule,
    EditpageRoutingModule,
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
export class EditpageModule {}
