import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { PokemonModel } from './pokemon.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  pokemon: PokemonModel = new PokemonModel();
  pokemons: Array<any> = new Array();

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.listarPokemons();
  }

  listarPokemons(){
    this.pokemonsService.listarPokemons().subscribe(resposta => { 
      this.pokemons = resposta.results
      console.log(resposta);
    }, err => {
      console.log("Ocorreu um erro durante a consulta.", err)
    })
  }


}
