import { Injectable } from '@angular/core';
import { DataType } from './dataType';
import { data } from '../../../../../part1/index';

@Injectable({
  providedIn: 'root',
})
export class FrontpageService {
  datas: DataType[] = [
    {
      memberId: '1',
      fullName: '张四',
      dataOfBirth: '2000/10/30',
      gender: '男',
      membershipType: '学生',
      membershipStartDay: '2023/3/1',
      contactNumber: '176xxxxxxxx',
      email: 'xing@xing.com',
      residentialAddress: 'xxxx',
      emergencyContactNumber: 'xxxxxxx',
      medicalCondition: '健康',
      isExperiment: false,
    },
    {
      memberId: '2',
      fullName: '张四',
      dataOfBirth: '2000/10/30',
      gender: '男',
      membershipType: '学生',
      membershipStartDay: '2023/3/1',
      contactNumber: '176xxxxxxxx',
      email: 'xing@xing.com',
      residentialAddress: 'xxxx',
      emergencyContactNumber: 'xxxxxxx',
      medicalCondition: '健康',
      isExperiment: false,
    },
    {
      memberId: '3',
      fullName: '张四',
      dataOfBirth: '2000/10/30',
      gender: '男',
      membershipType: '学生',
      membershipStartDay: '2023/3/1',
      contactNumber: '176xxxxxxxx',
      email: 'xing@xing.com',
      residentialAddress: 'xxxx',
      emergencyContactNumber: 'xxxxxxx',
      medicalCondition: '健康',
      isExperiment: false,
    },
  ];

  // 获取数据
  getData() {
    return this.datas;
  }

  // 获取收藏夹数据
  getIsTab() {
    const dataTab: DataType[] = [];
    for (const item of this.datas) {
      if (item.isExperiment) {
        dataTab.push(item);
      }
    }

    return dataTab;
  }

  // 搜索成员
  searchId(id: string) {
    const dataes: DataType[] = [];
    for (const item of this.datas) {
      if (item.memberId === id) {
        dataes.push(item);
        break;
      }
    }

    return dataes;
  }

  // 添加成员
  addData(data: DataType) {
    this.datas.push(data);
  }

  // 添加收藏夹
  changeTab(id: string) {
    for (const [i, item] of this.datas.entries()) {
      if (item.memberId === id) {
        this.datas[i] = {
          ...item,
          isExperiment: true,
        };
      }
    }
  }

  // 修改成员
  edit(data: DataType) {
    let isEdit = false;
    for (const [i, item] of this.datas.entries()) {
      if (data.memberId === item.memberId) {
        this.datas[i] = {
          ...data,
        };
        isEdit = true;
      }
    }

    return isEdit;
  }

  // 删除收藏夹
  delTab(id: string) {
    for (const [i, item] of this.datas.entries()) {
      if (item.memberId === id) {
        this.datas[i] = {
          ...item,
          isExperiment: false,
        };
      }
    }
  }
}
