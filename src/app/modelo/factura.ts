import { Item } from './item';

export class Factura {
    id: number;
    tipo: string;
    fecha: string;
    pto: string;
    numero: number;
    clienteId: number;
    total: number;
    items: Item[];
  
    constructor( id: number, tipo: string, fecha: string, numero: number, pto: string, clienteId: number, total: number, items: Item[]) {
      this.id = id ;
      this.tipo = tipo;
      this.numero = numero;
      this.fecha = fecha;
      this.pto = pto;
      this.clienteId = clienteId;
      this.total = total;
      this.items = items;
    }
}
