import { Component, OnInit } from '@angular/core';
import { PokemonModel } from '../pokemons/pokemon.model';
import { PokemonsService } from '../pokemons.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

  pokemon: PokemonModel = new PokemonModel();
  tipos: Array<any> = new Array();
  pokemonList: Array<PokemonModel> = new Array();
  //list: Array<PesquisaTipoModel> = new  Array();
  pesquisaPorTipo: boolean = false
  pesquisaPorNome: boolean = false
 
  constructor(private pokemonsService: PokemonsService) {
    
   }

  ngOnInit(){
    this.carregarTipos();

  }
  onSubmit(form: NgForm){
    this.pokemonList = new Array();
    this.pokemon = new PokemonModel();
    this.pesquisaPorTipo = false;
    this.pesquisaPorNome = false;

    if(form.value.nome != ""){
      this.buscarPorNome(form.value.nome);
      this.pesquisaPorNome = true
    }

    if(form.value.tipo != ""){
      this.buscarPorTipo(form.value.tipo.name);
      this.pesquisaPorTipo = true;
      this.pesquisaPorNome = false;
    }
    form.reset();

  }
  
  buscarPorNome(nome: string){
    this.pokemonsService.buscarPorNome(nome).subscribe((resposta: any)  =>{
      this.pokemon.id = resposta.id
      this.pokemon.nome = resposta.name
      this.pokemon.listTipos.nome = resposta.types[0].type.name
      this.pokemon.listTipos.url = resposta.types[0].type.url
      this.pokemon.imagem = resposta.sprites.front_default
      this.pokemonList.push(this.pokemon);
    } , err => {
      console.log("Ocorreu um erro durante a consulta.", err)
    })
    
  }

  carregarTipos(){
    this.pokemonsService.carregarTipos().subscribe(resposta => { 
      this.tipos = resposta.results
      console.log(this.tipos);
      } , err => {
       console.log("Ocorreu um erro durante a consulta.", err)
    })
  }

  buscarPorTipo(tipo: string){
    this.pokemonsService.buscarPorTipo(tipo).subscribe((resposta: any) => {
     this.pokemon.listTipos.list = resposta.pokemon
    } , err => {
      console.log("Ocorreu um erro durante a consulta.", err)
    })
  }
}
