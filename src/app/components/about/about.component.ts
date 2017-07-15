import {Component, OnInit} from '@angular/core';
import {SheetsService} from '../../services/sheets.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public json;
  public unique_identifier = '1mK2zvp6ouN5r7kh0StqkULr32l9MyO0suBpMJUL4QeM';
  getData() {
     this.data.getSheetsData(this.unique_identifier)
      .subscribe(
        res => console.log(this.json = res));
  }
  constructor(private data:SheetsService) {
    this.getData();
  }
  parser(res){
    return res;
  }
  ngOnInit() {
  }

}
