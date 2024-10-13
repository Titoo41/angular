import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
@Component({
  selector: 'app-navbar-user',
  standalone: true,
  imports: [NzAvatarModule,
    NzToolTipModule],
  templateUrl: './navbar-user.component.html',
  styleUrl: './navbar-user.component.css'
})
export class NavbarUserComponent {
  user:any
  constructor(private auth : AuthService) {
    auth.idTokenClaims$.subscribe(user=>{
      if(user){
        this.user = user
      }
    })
  }
  logout(){
    this.auth.logout()
  }
}
