import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente';
import { CliRepoService } from '../cli-repo.service';

@Component({
  selector: 'app-cli-form',
  templateUrl: './cli-form.component.html',
  styleUrls: ['./cli-form.component.css']
})
export class CliFormComponent implements OnInit {

  nuevo: Cliente = new Cliente(0, '', '', '');

    edicion: boolean = false;

  constructor(public clienteRepoService: CliRepoService) {}

  ngOnInit() {}

  guardar() {
    
    if (this.edicion) {
      if (this.nuevo != null && this.nuevo.nombre !== '' ) {
      this.clienteRepoService
        .actualizar(this.nuevo)
        .subscribe(response => console.log('Cliente editado: ', response));
        this.clienteRepoService.getAll();
      this.edicion = false;      
    } else {
      alert ('No se pudo editar cliente');
    }
    } else {
      if (this.nuevo != null && this.nuevo.nombre !== '' ) {
        this.clienteRepoService
          .agregar(this.nuevo)
          .subscribe(response => console.log('Nuevo Cliente: ', response));        
          this.clienteRepoService.getAll();
      } else {
        alert ('No se pudo guardar nuevo cliente');
        return false;
      }
    }    
    setTimeout(() => {
      this.limpiar();
    }, 150);
    setTimeout(() => {
      this.clienteRepoService.getAll();
    }, 150);
    return true;
}


  editar(id: number) {
    this.clienteRepoService.getById(id).subscribe(nn => {
      this.nuevo = nn;
      this.edicion = true;
    });
  }

  limpiar() {
    this.nuevo.id = 0;
    this.nuevo.cuit = '';
    this.nuevo.direccion = '';
    this.nuevo.nombre = '';
    this.edicion = false;
    return;
  }

  

}
