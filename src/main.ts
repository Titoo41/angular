// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));


  import { bootstrapApplication } from '@angular/platform-browser';
  import { provideAuth0 } from '@auth0/auth0-angular';
  import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
  
  bootstrapApplication(AppComponent, {
    providers: [
      provideAuth0({
        domain: 'dev-5d3l7s2tgoqjsptl.us.auth0.com',
        clientId: 'DYn56PBMtyXQaVICNIdxV12efExaSmiZ',
        cacheLocation:'localstorage',
        authorizationParams: {
          redirect_uri: window.location.origin
        }
      }),
      provideRouter(routes)
    ]
  });  

