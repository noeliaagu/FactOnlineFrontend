import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProdRepoService } from '../prod-repo.service';

@Component({
  selector: 'app-prod-lista',
  templateUrl: './prod-lista.component.html',
  styleUrls: ['./prod-lista.component.css']
})
export class ProdListaComponent implements OnInit {

  variable: Producto;
  @Output() editado: EventEmitter<number> = new EventEmitter();

  constructor(public productoRepoService: ProdRepoService) {}

  ngOnInit() {
    this.productoRepoService.getAll();
  }

  obtener(id: number) {
    this.productoRepoService
      .getById(id)
      .subscribe(nn => (this.variable = nn));
  }

  eliminar(id: number) {
    this.productoRepoService
      .eliminar(id)
      .subscribe(nn => this.productoRepoService.getAll());
  }

  editar(id: number) {
    this.editado.emit(id);
  }

}
