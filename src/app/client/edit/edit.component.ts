import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  client: any = {}; // Objeto para almacenar datos del cliente a editar

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get(`http://localhost:3000/api/clients/${id}`)
      .subscribe(data => {
        this.client = data; // Cargar datos del cliente
      });
  }

  updateClient(): void {
    this.http.put(`http://localhost:3000/api/clients/${this.client.id}`, this.client)
      .subscribe(() => {
        this.router.navigate(['/client']); // Redirige a la página de administración
      });
  }
}
