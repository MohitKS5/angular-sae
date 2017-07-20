import {Component, OnInit} from '@angular/core';
import {SheetsService} from '../../services/sheets.service';
import {SubFilterPipe} from './sub-filter.pipe';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css', './flexslider.css']
})
export class MembersComponent implements OnInit {
  public sheet;
  public subsystems=['Brakes','Chassis','Powertrain','Vehicle Dynamics','Marketing','Web Development'];
  public unique_identifier = '5';
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
