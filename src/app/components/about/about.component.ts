import {Component, OnInit} from '@angular/core';
import {SheetsService} from '../../services/sheets.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public sheet;
  public unique_identifier = '1';
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
