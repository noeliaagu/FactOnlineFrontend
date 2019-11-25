import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Cliente } from 'src/app/modelo/cliente';
import { CliRepoService } from '../cli-repo.service';


@Component({
  selector: 'app-cli-lista',
  templateUrl: './cli-lista.component.html',
  styleUrls: ['./cli-lista.component.css']
})
export class CliListaComponent implements OnInit {

  variable: Cliente;
  @Output() editado: EventEmitter<number> = new EventEmitter();

  constructor(public clienteRepoService: CliRepoService) {}

  ngOnInit() {
    this.clienteRepoService.getAll();
  }

  obtener(id: number) {
    this.clienteRepoService
      .getById(id)
      .subscribe(nn => (this.variable = nn));
  }

  eliminar(id: number) {
    this.clienteRepoService
      .eliminar(id)
      .subscribe(nn => this.clienteRepoService.getAll());
  }

  editar(id: number) {
    this.editado.emit(id);
  }


}
