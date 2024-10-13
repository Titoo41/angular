import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { AuthGuard } from '../../../service/auth.guard';

export const CLIENTE_ROUTES: Routes = [
  { path: '', component: ClienteComponent, canActivate: [AuthGuard] },
];
