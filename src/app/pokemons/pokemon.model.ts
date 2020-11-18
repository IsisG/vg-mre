import { analyzeAndValidateNgModules } from '@angular/compiler';

export class PokemonModel{
    nome =  String;
    id = Number;
    imagem =  String;
    tipos =  String;
    listTipos = {
        nome: String,
        url: String,
        list: [],
        tipo: {}
    };
    listPokemons = [];

}