import { Component, OnInit } from '@angular/core';
import {SheetsService} from '../../../services/sheets.service';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['../sponsors.component.css']
})
export class BrochureComponent implements OnInit {
  public sheet2;
  public unique_identifier = '4';
  getData() {
    this.data.getSheetsData(this.unique_identifier)
      .subscribe(
        res => this.sheet2 = res);
  }
  constructor(private data:SheetsService) {
    this.getData();
  }
  ngOnInit() {
  }

}
