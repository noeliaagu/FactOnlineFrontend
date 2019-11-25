import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CliRepoService {
  listado: Cliente[] = [];

  constructor(private httpClient: HttpClient) {}

  getAll() {
    this.httpClient.get<Cliente[]>('http://localhost:3000/cliente')
    .subscribe(
      (data) => this.listado = data.sort((a, b) => a.nombre.localeCompare(b.nombre))
    );
  }

  getById(id: number) {
    return this.httpClient.get<Cliente>(`http://localhost:3000/cliente/${id}`);
  }

  agregar(n: Cliente) {
    return this.httpClient.post('http://localhost:3000/cliente', n );
  }

  eliminar(id: number) {
    if (confirm('Desea eliminar el cliente?')) {
      return this.httpClient.delete(`http://localhost:3000/cliente/${id}`);
    }
  }

  actualizar(nn: Cliente) {
    return this.httpClient.put(`http://localhost:3000/cliente/${nn.id}`, nn);
  }
}
