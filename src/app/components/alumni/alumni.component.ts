import {Component, OnInit} from '@angular/core';
import {SheetsService} from '../../services/sheets.service';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {
  public mobile = window.screen.width < 1024;
  // public unique_identifier = '8';
  // public sheet:any;
  // getData() {
  //   this.data.getSheetsData(this.unique_identifier)
  //     .subscribe(
  //       res => this.sheet = res);
  // }
  constructor(private data:SheetsService) {
    // this.getData();
  }
  ngOnInit() {
  }
}
