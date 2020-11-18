import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonModel } from './pokemons/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http: HttpClient) { }

  listarPokemons() : Observable<any>{
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=50`);
  }

  buscarPorNome(nome: String) : Observable<PokemonModel>{
    return this.http.get<PokemonModel>(`https://pokeapi.co/api/v2/pokemon/${nome}`);
  }

  buscarPorTipo(tipo: string) : Observable<PokemonModel>{
    return this.http.get<PokemonModel>(`https://pokeapi.co/api/v2/type/${tipo}/`);
  }

  carregarTipos() : Observable<any>{
    return this.http.get(`https://pokeapi.co/api/v2/type`);
  }
}
