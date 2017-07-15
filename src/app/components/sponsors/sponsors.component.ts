import {Component, OnInit} from '@angular/core';
import {SheetsService} from '../../services/sheets.service';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  public unique_identifier = [3,4];
  public sheet;
  sheet2;
  getData() {
      this.data.getSheetsData(this.unique_identifier[0])
      .subscribe(
        res => console.log(this.sheet=res));
    this.data.getSheetsData(this.unique_identifier[1])
      .subscribe(
        res => console.log(this.sheet2=res));
  }

  constructor(private data: SheetsService,) {
    this.getData();
  }

  ngOnInit() {
  }

}
