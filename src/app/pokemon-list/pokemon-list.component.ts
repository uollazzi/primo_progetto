import { Component } from '@angular/core';
import { POKEMONS } from '../dati';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  data = POKEMONS;
}
