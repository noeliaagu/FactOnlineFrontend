import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProdRepoService } from '../prod-repo.service';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.css']
})
export class ProdFormComponent implements OnInit {
  
  nuevo: Producto = new Producto(0, '', '', 0 );
 
  edicion: boolean = false;

constructor(public productoRepoService: ProdRepoService) {}

ngOnInit() {}

guardar() {
  
  if (this.edicion) {
    if (this.nuevo != null && this.nuevo.descripcion !== '' ) {
    this.productoRepoService
      .actualizar(this.nuevo)
      .subscribe(response =>
        console.log('Producto editado: ', response)
      );
    this.edicion = false;
    
  } else {
    alert ('No se pudo modificar el producto');
  }
  } else {
    if (this.nuevo != null && this.nuevo.descripcion !== '' ) {
    this.productoRepoService
      .agregar(this.nuevo)
      .subscribe(response => console.log('Nuevo producto: ', response));
    
    } else {
      alert ('No se pudo agregar nuevo producto');
    }
  }
 
  // setTimeout(() => {
    this.limpiar();
  // }, 1500);
  setTimeout(() => {
    this.productoRepoService.getAll();    
  }, 150);
  return true;
}

editar(id: number) {
  this.productoRepoService.getById(id).subscribe(nn => {
    this.nuevo = nn;
    this.edicion = true;
  });
}

limpiar() {
this.nuevo.codigo = '';
this.nuevo.id = 0;
this.nuevo.descripcion = '';
this.nuevo.precio = 0;
this.edicion = false;
return;
}

}
