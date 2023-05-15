import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Attack } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-attack',
  templateUrl: './pokemon-attack.component.html',
  styleUrls: ['./pokemon-attack.component.css']
})
export class PokemonAttackComponent {
  @Input()
  attack?: Attack;

  @Output()
  onAttackSelected = new EventEmitter<Attack>(); // generics

  attacca() {
    // console.log(this.attack);

    this.onAttackSelected.emit(this.attack);
  }
}
