import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from './app-login/app-interface';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(
    private router: Router
  ) {}

  login(user: User) {
    if (user.userName === 'admin' && user.password === 'admin' ) { // {3}
      this.loggedIn.next(true);
      this.router.navigate(['/']);
      console.log('Login Successfully');
    } else {
        const x = document.getElementById('snackbar');
        x.className = 'show';
        setTimeout(function(){ x.className = x.className.replace('show', ''); }, 3000);
        console.log('Login error');
    }
  }

  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
