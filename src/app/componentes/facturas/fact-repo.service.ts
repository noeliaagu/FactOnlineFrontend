import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from 'src/app/modelo/factura';

@Injectable({
  providedIn: 'root'
})
export class FactRepoService {

  listado: Factura[] = [];
  numFac = 0;

  constructor(private httpClient: HttpClient) {}

  getAll() {
    this.httpClient.get<Factura[]>('http://localhost:3000/factura')
    .subscribe(
      (data) => this.listado = data.sort((a, b) => a.fecha.localeCompare(b.fecha))
    );
    this.numFac = this.listado.length + 1;
  }

  getById(id: number) {
    return this.httpClient.get<Factura>(`http://localhost:3000/factura/${id}`);
  }

  agregar(n: Factura) {
    return this.httpClient.post('http://localhost:3000/factura', n );
  }

  borrar(id: number) {
    if (confirm('Desea eliminar la factura?')) {
      return this.httpClient.delete(`http://localhost:3000/factura/${id}`);
    }
  }

  actualizar(nn: Factura) {
    return this.httpClient.put(`http://localhost:3000/factura/${nn.id}`, nn);
  }
}
