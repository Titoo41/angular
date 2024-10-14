import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  newClient: any = {}; // Objeto para guardar datos del nuevo cliente

  constructor(private http: HttpClient, private router: Router) {}

  createClient(): void {
    this.http.post('http://localhost:3000/api/clients', this.newClient)
      .subscribe(() => {
        this.router.navigate(['/client']); // Redirige a la página de administración
      });
  }
}
