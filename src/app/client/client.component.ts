import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client, ClientResponse } from './client.model'; // Asegúrate de que ambas interfaces se importen


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clients: Client[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalItems: number = 0;
  pages: number[] = []; // Variable para almacenar el número de páginas

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchClients();
  }

  fetchClients(): void {
    this.http.get<ClientResponse>(`http://localhost:3000/api/clients?page=${this.currentPage}&limit=${this.itemsPerPage}`)
      .subscribe(response => {
        this.clients = response.data;
        this.totalItems = response.total;
        this.calculatePages(); // Calcular las páginas cada vez que se obtienen nuevos datos
      });
  }

  calculatePages(): void {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1); // Crea un array de páginas
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.fetchClients();
  }
}
