import { Component, Input } from '@angular/core';
import { Attack, Pokemon } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-preview',
  templateUrl: './pokemon-preview.component.html',
  styleUrls: ['./pokemon-preview.component.css']
})
export class PokemonPreviewComponent {

  @Input()
  pokemon?: Pokemon;

  // TODO: temporaneo, poi lo sistemiamo
  hpFortissimo = 130;

  attaccoSelezionato(attack: Attack) {
    console.log("pokemon-preview:", attack);
  }
}
