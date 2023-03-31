import { Component } from '@angular/core';
import { DataType } from '../frontpage/dataType';
import { FrontpageService } from '../frontpage/frontpage.service';

@Component({
  selector: 'app-collectpage',
  templateUrl: './collectpage.component.html',
  styleUrls: ['./collectpage.component.scss'],
})
export class CollectpageComponent {
  data: DataType[] = [];

  constructor(private datas: FrontpageService) {}

  getData() {
    this.data = this.datas.getIsTab();
  }

  delTab(e: MouseEvent, id: string) {
    e.preventDefault();
    this.datas.delTab(id);
    this.getData();
  }

  ngOnInit(): void {
    this.getData();
  }
}
