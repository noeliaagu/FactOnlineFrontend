import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ProdListaComponent } from './componentes/productos/prod-lista/prod-lista.component';
import { ProdFormComponent } from './componentes/productos/prod-form/prod-form.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CliListaComponent } from './componentes/clientes/cli-lista/cli-lista.component';
import { CliFormComponent } from './componentes/clientes/cli-form/cli-form.component';
import { FactFormComponent } from './componentes/facturas/fact-form/fact-form.component';
import { FactListaComponent } from './componentes/facturas/fact-lista/fact-lista.component';


const paths = [
  { path: 'productos'  , component: ProdListaComponent },
  { path: 'clientes'  , component: CliListaComponent },
  { path: 'facturas'  , component: FactListaComponent },
  { path: ''  , redirectTo: '/clientes' , pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProdListaComponent,
    ProdFormComponent,
    NavbarComponent,
    CliListaComponent,
    CliFormComponent,
    FactFormComponent,
    FactListaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(paths),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
