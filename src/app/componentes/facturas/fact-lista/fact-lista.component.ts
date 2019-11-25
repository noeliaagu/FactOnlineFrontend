import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Factura } from 'src/app/modelo/factura';
import { FactRepoService } from '../fact-repo.service';

@Component({
  selector: 'app-fact-lista',
  templateUrl: './fact-lista.component.html',
  styleUrls: ['./fact-lista.component.css']
})
export class FactListaComponent implements OnInit {

  
  variable: Factura = new Factura (0, 'A', '0-0-0', 0, '0', 0 , 0, []);
  @Output() editado: EventEmitter<number> = new EventEmitter();

  constructor(public facturaRepoService: FactRepoService) {}

  ngOnInit() {
    this.facturaRepoService.getAll();
  }

  obtener(id: number) {
    this.facturaRepoService
      .getById(id)
      .subscribe(nn => (this.variable = nn));
  }

  borrar(id: number) {
    this.facturaRepoService
      .borrar(id)
      .subscribe(nn => this.facturaRepoService.getAll());
  }

  editar(id: number) {
    this.editado.emit(id);
  }

}
