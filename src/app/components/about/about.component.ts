import {Component, OnInit} from '@angular/core';
import {SheetsService} from '../../services/sheets.service';
import {Http, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public sheet;
  public mobile = window.screen.width < 1024;
  public unique_identifier = '1';
  getData() {
     this.data.getSheetsData(this.unique_identifier)
      .subscribe(
        res => {
          this.sheet = res;
          // this.http.post('http://turbo-iitkms.herokuapp.com/save/2',res).subscribe(()=>console.log(res));
        }
        );
  }
  constructor(private data:SheetsService,private http: Http) {
    this.getData();
    this.data.getfromfirebase(1);
  }
  ngOnInit() {
  }
}
