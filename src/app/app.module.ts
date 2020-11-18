import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

import { PokemonsService } from './pokemons.service';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { PesquisarTipoComponent } from './pesquisar-tipo/pesquisar-tipo.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PesquisaComponent,
    PesquisarTipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule, PokemonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
