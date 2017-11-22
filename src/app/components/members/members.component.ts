import {Component, OnInit} from '@angular/core';
import {SheetsService} from '../../services/sheets.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  public sheet;
  public mobile = window.screen.width < 1024;
  public subsystems = ['Aerodynamics', 'Brakes', 'Chassis', 'Powertrain', 'Vehicle Dynamics', 'Marketing', 'Web Development'];
  public unique_identifier = '5';

  getData() {
    this.data.getSheetsData(this.unique_identifier)
      .subscribe(
        res => this.sheet = res);
  }

  constructor(private data: SheetsService) {
    this.getData();
  }

  getImage(picurl) {
    if (picurl[0].substr(0,1) == '/') {
      // console.log(picurl[0].substr(0,1));
       return 'https://res.cloudinary.com/imagelibraryfsae/image/upload/v1498843998' + picurl;
    }
    else {
      return 'https://drive.google.com/uc?export=view&id='+picurl;
    }
  }

  ngOnInit() {
  }

}
