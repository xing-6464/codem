import { Component } from '@angular/core';
import { DataType } from '../frontpage/dataType';
import { FrontpageService } from '../frontpage/frontpage.service';

@Component({
  selector: 'app-inquirepage',
  templateUrl: './inquirepage.component.html',
  styleUrls: ['./inquirepage.component.scss'],
})
export class InquirepageComponent {
  data: DataType[] = [];
  constructor(private datas: FrontpageService) {}

  // 搜索
  getIdData(id: string) {
    this.data = this.datas.searchId(id);
  }
}
