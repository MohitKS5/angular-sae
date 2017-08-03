import {Component, OnInit} from '@angular/core';
import {SheetsService} from '../../services/sheets.service';

@Component({
  selector: 'app-sponsors-logos',
  templateUrl: './sponsors-logos.component.html',
  styleUrls: ['./sponsors-logos.component.css']
})
export class SponsorsLogosComponent implements OnInit {
  public sheet;
  public unique_identifier = '6';
  getData() {
    this.data.getSheetsData(this.unique_identifier)
      .subscribe(
        res => this.sheet = res);
  }
  constructor(private data:SheetsService) {
    this.getData();
  }
  ngOnInit() {
  }

}
