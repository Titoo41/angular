import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { CreateComponent } from './client/create/create.component';
import { EditComponent } from './client/edit/edit.component';
import { PublicComponent } from './public/public.component';
import { AuthGuard } from '@auth0/auth0-angular'; // Asegúrate de tener esto

const routes: Routes = [
  { path: '', component: PublicComponent },
  { path: 'client', component: ClientComponent, canActivate: [AuthGuard] },
  { path: 'client/crear', component: CreateComponent, canActivate: [AuthGuard] },
  { path: 'client/:id/edit', component: EditComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
