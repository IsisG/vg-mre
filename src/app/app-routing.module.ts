import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

const routes: Routes = [
  { path: '', component: PesquisaComponent},
  { path: 'pokemons', component: PokemonsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
