import { Component } from '@angular/core';
import { DataType } from './dataType';
import { FrontpageService } from './frontpage.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss'],
})
export class FrontpageComponent {
  data: DataType[] = [];

  constructor(private dataService: FrontpageService) {}

  // 添加收藏
  isTab(e: MouseEvent, id: string) {
    e.preventDefault();
    this.dataService.changeTab(id);
  }

  // 删除收藏夹
  delTab(e: MouseEvent, id: string) {
    e.preventDefault();
    this.dataService.delTab(id);
  }

  getData() {
    this.data = this.dataService.getData();
  }

  ngOnInit() {
    this.getData();
  }
}
