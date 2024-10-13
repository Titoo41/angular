import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AuthGuard } from '../../../service/auth.guard';



@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule,NzButtonModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document){

  }

  login() {
    this.auth.loginWithRedirect();
  }
  
  logout() {
    this.auth.logout({ 
      logoutParams: {
        returnTo: this.document.location.origin 
      }
    });
  }
  
}
