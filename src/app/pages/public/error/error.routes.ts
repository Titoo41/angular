import { Routes } from '@angular/router';
import { ErrorComponent } from './error.component';

export const ERROR_ROUTES: Routes = [
  { path: ':code', component: ErrorComponent },
];
