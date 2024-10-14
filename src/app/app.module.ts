import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '@auth0/auth0-angular';
import { PublicComponent } from './public/public.component';
import { ClientComponent } from './client/client.component';
import { CreateComponent } from './client/create/create.component';
import { EditComponent } from './client/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    ClientComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'tu-dominio.auth0.com',  // Reemplaza con tu dominio de Auth0
      clientId: 'tu-client-id',         // Reemplaza con tu Client ID de Auth0
      redirectUri: window.location.origin // Asegúrate de que esto esté correcto
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
