export class Item {
    id: number;
    idfact: number;
    idprod: number;
    cant: number;
    codigo: string;
    descripcion: string;
    precio: number;
    iva: number;
    subtotal: number;
  
   
    constructor( id: number, idfact: number, idprod: number, cant: number, codigo: string, descripcion: string,     precio: number, iva: number, subtotal: number) {
      this.id = id;
      this.idfact = idfact;
      this.idprod = idprod;
      this.cant = cant;
      this.codigo = codigo;
      this.descripcion = descripcion;
      this.precio = precio;
      this.iva = iva;
      this.subtotal = subtotal;
    }
}
