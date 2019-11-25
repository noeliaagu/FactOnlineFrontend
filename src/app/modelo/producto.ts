export class Producto {
    id: number;
    codigo: string;
    descripcion: string;
    precio: number;
  
  
    constructor( id: number, codigo: string, descripcion: string, precio: number) {
      this.id = id ;
      this.codigo = codigo;
      this.descripcion = descripcion;
      this.precio = precio;
    }
}
