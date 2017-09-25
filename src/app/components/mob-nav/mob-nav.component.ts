import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mob-nav',
  templateUrl: './mob-nav.component.html',
  styleUrls: ['./mob-nav.component.css']
})
export class MobNavComponent implements OnInit {
  public opened: boolean;
  public mobile = window.screen.width < 1024;
  public routes = ['about','sponsors','members','alumni'];

  constructor() {
    this.opened = false;
  }

  ngOnInit() {
  }

}
