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
import { FormsModule } from '@angular/forms';

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
      domain: 'dev-5d3l7s2tgoqjsptl.us.auth0.com', // Reemplaza con tu dominio
      clientId: 'DYn56PBMtyXQaVICNIdxV12efExaSmiZ', // Reemplaza con tu client ID
      //redirectUri: window.location.origin // Asegúrate de que este valor sea correcto para tu aplicación
    })
  ],
  providers: [],
  bootstrap: [AppComponent] // ACA NO SE QUE ONDA
})
export class AppModule { }
