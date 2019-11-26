import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/modelo/item';
import { Factura } from 'src/app/modelo/factura';
import { FactRepoService } from '../fact-repo.service';
import { CliRepoService } from '../../clientes/cli-repo.service';
import { ProdRepoService } from '../../productos/prod-repo.service';

@Component({
  selector: 'app-fact-form',
  templateUrl: './fact-form.component.html',
  styleUrls: ['./fact-form.component.css']
})
export class FactFormComponent implements OnInit {

  listaItems: Item[] = [];
    nuevo: Factura = new Factura(0, 'A', this.getFecha(), this.facturaRepoService.numFac, '00001', 0 , 0,  this.listaItems );
    
    nvitm: Item = new Item(0, 0, 0 , 0 , '0', ' ', 0, 0, 0);
    
    edicion: boolean = false;
    valorID: number;

  constructor(public facturaRepoService: FactRepoService,
              public clienteRepoService: CliRepoService,
              public productoRepoService: ProdRepoService ) {
                clienteRepoService.getAll();
                productoRepoService.getAll();
              }

  ngOnInit() {}

  emitir() {
      if (this.nuevo != null && this.nuevo.total > 0 && this.nuevo.clienteId && this.nuevo.items ) {
      this.facturaRepoService
        .agregar(this.nuevo)
        .subscribe(response => console.log('Nuevo item creado: ', response));
        this.facturaRepoService.getAll();
     
      } else {
        alert('No se pudo emitir la factura!');
        return false;
      }
      
      setTimeout(() => {
      this.limpiar();
    }, 150);
      setTimeout(() => {
      this.facturaRepoService.getAll();
     
    }, 150);
  }

  agregarItem() {

   let x = 0;
   let i = 0;
   let valorIDRep = false;
   let nuevaCant = 0;
   let t = 0;
   let s = 0;

   
   for ( x = 0; x < this.productoRepoService.listado.length; x++ ) {

    if ( this.productoRepoService.listado[x].id == this.valorID && valorIDRep == false ) {
        this.nvitm = new Item(0, 0, this.valorID , this.nvitm.cant , '0', ' ', 0, 0, 0);
        this.nvitm.descripcion = this.productoRepoService.listado[x].descripcion;
        this.nvitm.codigo = this.productoRepoService.listado[x].codigo;
        this.nvitm.precio = this.productoRepoService.listado[x].precio;
        this.nvitm.subtotal = this.nvitm.cant * this.productoRepoService.listado[x].precio;
        this.nvitm.subtotal = Number(this.nvitm.subtotal.toFixed(2));
        this.nvitm.id = this.listaItems.length + 1;
        this.nvitm.idfact = this.facturaRepoService.listado.length + 1;
        this.nvitm.iva = 21;
        this.nuevo.total += this.nvitm.subtotal;
        this.nuevo.total = Number(this.nuevo.total.toFixed(2));

        if ( this.nvitm.cant > 0 && this.nvitm.descripcion != null ) {
          this.listaItems.push(this.nvitm);
          this.nuevo.items = this.listaItems;
          this.nvitm = new Item(0, 0, this.valorID , this.nvitm.cant , '0', ' ', 0, 0, 0);
        } else {
          alert('Ingrese cantidad');
        }
      }
   }
  }

  borrarItem(id: number) {
    let p = 0;
    let t = 0;
    let s = 0;
    for ( p = 0; p < this.listaItems.length; p++ ) {
      if ( this.listaItems[p].id === id ) {
          if (confirm('Desea eliminar el item seleccionado?')) {
            t = this.nuevo.total;
            s = this.listaItems[p].subtotal;
            this.nuevo.total = t - s;
            this.nuevo.total = Number(this.nuevo.total.toFixed(2));
            this.listaItems.splice( p , 1 );
          }
        }
     }
  }

  

    limpiar() {
    this.listaItems = [];
    this.nvitm = new Item(0, 0, this.valorID , this.nvitm.cant , '0', ' ', 0, 0, 0);
    this.facturaRepoService.getAll();
    this.facturaRepoService.numFac = this.facturaRepoService.listado.length + 1;
    this.nuevo = new Factura(0, 'A', this.getFecha(), this.facturaRepoService.numFac, '00001', 0 , 0, [] );
    return;
  }
  
  getFecha() {
   const currentdate: Date = new Date();
   const fechaActual: string = currentdate.getDate().toString()  + '/' + (currentdate.getMonth() + 1).toString()
    + '/' + currentdate.getFullYear().toString();
   return fechaActual;
  }

}
