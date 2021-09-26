import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser!: User;
 
  constructor(
  private router: Router,
  private authenticationService: AuthserviceService
  ) {
  
  }
   
 /* logout() {
  this.authenticationService.logout();
  this.router.navigate(['login']);
  } */
}
