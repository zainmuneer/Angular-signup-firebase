import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sign-up-firebase';
constructor(private router:Router){
}


logout(){
  this.router.navigate([,'/sign-up-firebase']);
}
}
