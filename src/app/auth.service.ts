import { Injectable } from '@angular/core';
import { AuthService as Auth0Service } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth0: Auth0Service) {}

  login(): void {
    this.auth0.loginWithRedirect();
  }

  logout(): void {
    this.auth0.logout({ returnTo: window.location.origin });  // Verifica si este código está bien.
  }

  isAuthenticated$ = this.auth0.isAuthenticated$;
  user$ = this.auth0.user$;
}
