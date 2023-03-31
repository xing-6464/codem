import { Component } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

import { FrontpageService } from '../frontpage/frontpage.service';
import { DataType } from '../frontpage/dataType';
import { dateTo } from '../../utils';

type ObjKey = 'Option1' | 'Option2' | 'Option3' | 'Option4' | 'Option5';
type ObjVal = '基本' | '高级' | '公司' | '学生' | '日卡';
const obj = {
  Option1: '基本',
  Option2: '高级',
  Option3: '公司',
  Option4: '学生',
  Option5: '日卡',
};

@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.scss'],
})
export class AddpageComponent {
  validateForm!: UntypedFormGroup;
  datas: DataType[] = [];

  // 添加信息
  submitForm(): void {
    if (this.validateForm.valid) {
      const {
        ID,
        fullName,
        dataOfBirth,
        gender,
        membershipType,
        membershipStartDay,
        contactNumber,
        email,
        residentialAddress,
        emergencyContactNumber,
        medicalCondition,
      } = this.validateForm.value;

      const data: DataType = {
        memberId: (
          parseInt(this.datas[this.datas.length - 1].memberId) + 1
        ).toString(),
        fullName,
        dataOfBirth: dateTo(dataOfBirth),
        gender: gender === 'A' ? '男' : gender === 'B' ? '女' : '未指明',
        membershipType: obj[membershipType as ObjKey] as ObjVal,
        membershipStartDay: dateTo(membershipStartDay),
        contactNumber,
        email,
        residentialAddress,
        emergencyContactNumber,
        medicalCondition,
        isExperiment: false,
      };

      // 完成操作
      this.validateForm.reset();
      this.message.success('数据修改成功');
      this.datass.addData(data);
    } else {
      console.info(this.validateForm);
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  constructor(
    private fb: UntypedFormBuilder,
    private datass: FrontpageService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    // 配置验证器
    this.validateForm = this.fb.group({
      fullName: ['', [Validators.required]],
      dataOfBirth: ['', [Validators.required]],
      gender: ['A'],
      membershipType: ['', [Validators.required]],
      membershipStartDay: ['', [Validators.required]],
      contactNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      email: ['', [Validators.required]],
      residentialAddress: ['', [Validators.required]],
      emergencyContactNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      medicalCondition: [''],
    });

    this.datas = this.datass.getData();
  }
}
