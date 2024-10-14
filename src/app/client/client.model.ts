// src/app/client/client.model.ts

export interface Client {
    id: number;    // Asegúrate de que el tipo de dato sea correcto
    name: string;  // Asegúrate de que el tipo de dato sea correcto
  }
  
  export interface ClientResponse {
    data: Client[]; // Array de clientes
    total: number;  // Total de clientes
  }
  