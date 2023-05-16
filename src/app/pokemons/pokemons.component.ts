import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../dati';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  data = POKEMONS;

  hpFortissimo = 100;

  pannelloAperto = true;

  ngOnInit(): void {

  }

  messaggioAlert(e: MouseEvent, saluto: string) {
    alert(`${saluto}, sono presenti ${this.data.length} pokemons.`);

    console.log(e);
  }

  funzioneTest(): void {
    for (const pokemon of this.data) {
      // ogni ciclo ho un pokemon
      console.log(pokemon.name);

      let potenza = +pokemon.hp >= this.hpFortissimo ? "FORTISSIMO" : "FORTE MA NON FORTISSIMO";

      for (const w of pokemon.weaknesses) {
        console.log(w.type);
      }
    }

    // operatore ternario
    let anni = 19;
    let stato = "";

    if (anni >= 18) {
      stato = "Maggiorenne";
    } else {
      stato = "Minorenne";
    }

    stato = anni >= 18 ? "Maggiorene" : "Minorenne";
  }
}
