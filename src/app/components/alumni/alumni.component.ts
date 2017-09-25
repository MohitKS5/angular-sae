import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.css']
})
export class AlumniComponent implements OnInit {
  public mobile = window.screen.width < 1024;
  constructor() {
  }

  ngOnInit() {
  }

}
