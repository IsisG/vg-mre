import { Component, OnInit, Input } from '@angular/core';
import { PokemonModel } from '../pokemons/pokemon.model';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pesquisar-tipo',
  templateUrl: './pesquisar-tipo.component.html',
  styleUrls: ['./pesquisar-tipo.component.scss']
})
export class PesquisarTipoComponent implements OnInit {

  @Input() pokemon: PokemonModel = new PokemonModel();
  tipos: Array<any> = new Array();
  pesquisaPorTipo: boolean = false
  pesquisaPorNome: boolean = false
 

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit(){
  }


}
