import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sign-up-firebase';
constructor(private router:Router,
  private authService:AuthenticationService){
}


logout(){
  this.authService.logout().subscribe(()=>{
    this.router.navigate(['/login']);
  });
}
}
