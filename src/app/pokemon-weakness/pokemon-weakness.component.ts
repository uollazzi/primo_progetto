import { Component, Input } from '@angular/core';
import { Weakness } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-weakness',
  templateUrl: './pokemon-weakness.component.html',
  styleUrls: ['./pokemon-weakness.component.css']
})
export class PokemonWeaknessComponent {
  @Input()
  weakness?: Weakness;
}
