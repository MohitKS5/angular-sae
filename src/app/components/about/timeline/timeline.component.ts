import { Component, OnInit } from '@angular/core';
import {SheetsService} from '../../../services/sheets.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  public sheet;
  public unique_identifier = '2';
  getData() {
    this.data.getSheetsData(this.unique_identifier)
      .subscribe(
        res => console.log(this.sheet = res));
  }
  constructor(private data:SheetsService) {
    this.getData();
  }
  ngOnInit() {
  }

}
