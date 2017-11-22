import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mob-nav',
  templateUrl: './mob-nav.component.html',
  styleUrls: ['./mob-nav.component.css']
})
export class MobNavComponent implements OnInit {
  public opened: boolean;
  public clicked: boolean;
  public mobile = window.screen.width < 1024;
  public routes = ['About', 'Sponsors', 'Members', 'Alumni'];

  constructor() {
    this.opened = false;
    this.clicked = true;
  }

  ngOnInit() {
  }

}
