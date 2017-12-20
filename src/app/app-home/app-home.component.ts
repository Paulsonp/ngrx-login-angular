import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;                  // {1}
  
    constructor(private authService: AuthService) { }
  
    ngOnInit() {
      this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
    }
  
    onLogout() {
      this.authService.logout();                      // {3}
    }

}
