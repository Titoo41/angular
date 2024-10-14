import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { ClientComponent } from './client/client.component';
import { CreateComponent } from './client/create/create.component';
import { EditComponent } from './client/edit/edit.component';

const routes: Routes = [
  { path: '', component: PublicComponent }, // Página pública
  { path: 'client', component: ClientComponent }, // Tabla de administración
  { path: 'client/crear', component: CreateComponent }, // Crear entidad
  { path: 'client/:id/edit', component: EditComponent }, // Editar entidad
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
