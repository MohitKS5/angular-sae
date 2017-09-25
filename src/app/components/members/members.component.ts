import {Component, OnInit} from '@angular/core';
import {SheetsService} from '../../services/sheets.service';
import {SubFilterPipe} from './sub-filter.pipe';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  public sheet;
  public mobile = window.screen.width < 1024;
  public subsystems=['Brakes','Chassis','Powertrain','Vehicle Dynamics','Marketing','Web Development'];
  public unique_identifier = '5';
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
