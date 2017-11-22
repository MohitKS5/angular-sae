import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css'],
})
export class AppComponent{
  public mobile = window.screen.width < 1024;
  constructor(private router: Router){
    if(this.mobile){
      this.router.navigate(['/home']);
    }
  }
}
