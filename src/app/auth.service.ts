import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth0: Auth0Service) {}

  login() {
    this.auth0.loginWithRedirect();
  }

  logout() {
    this.auth0.logout({ returnTo: window.location.origin }); // Aquí verifica que window.location.origin esté bien
  }

  isAuthenticated$ = this.auth0.isAuthenticated$;
  user$ = this.auth0.user$;
}
