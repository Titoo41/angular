import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
// import { NzMenuModule } from 'ng-zorro-antd/menu';
// import { NzButtonModule } from 'ng-zorro-antd/button';
// import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { WelcomeComponent } from './pages/public/welcome/welcome.component';
import { NavbarMenuComponent } from './component/navbar/navbar-menu/navbar-menu.component';
import { NavbarUserComponent } from './component/navbar/navbar-user/navbar-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    // Componentes
    NavbarMenuComponent,
    WelcomeComponent,
    NavbarUserComponent,
    // Módulos de ng-zorro
    NzIconModule,
    NzLayoutModule,
    // NzMenuModule,
    // NzButtonModule,
    // NzBreadCrumbModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrección de 'styleUrl' a 'styleUrls'
})
export class AppComponent {
  title = 'auth0example';

  constructor(public auth: AuthService) {
    console.log("Constructor de AppComponent");
    this.auth.idTokenClaims$.subscribe(data => { 
      console.log(data);
    });
  }
}
