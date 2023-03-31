export interface DataType {
  memberId: string;
  fullName: string;
  dataOfBirth: string;
  gender: '男' | '女' | '未指明';
  membershipType: '基本' | '高级' | '公司' | '学生' | '日卡';
  membershipStartDay: string;
  contactNumber: string;
  email: string;
  residentialAddress: string;
  emergencyContactNumber: string;
  medicalCondition?: string;
  isExperiment: boolean;
}
