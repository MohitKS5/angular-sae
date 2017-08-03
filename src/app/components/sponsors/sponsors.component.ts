import {Component, OnInit} from '@angular/core';
import {SheetsService} from '../../services/sheets.service';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  public unique_identifier = 3;
  public sheet;
  getData() {
      this.data.getSheetsData(this.unique_identifier)
      .subscribe(
        res => this.sheet=res);
  }

  constructor(private data: SheetsService,) {
    this.getData();
  }

  ngOnInit() {
  }

}
