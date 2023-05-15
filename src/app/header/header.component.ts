import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  titolo: string = "Ciao sono il primo progetto";
  sottoTitolo = "Maggio 2023";

  anni = 18;
  // anni: number = 18;

  mario = { nome: "Mario", cognome: "Rossi", annoNascita: 1980 };

  animali = [
    "gatto",
    "cane",
    "cavallo"
  ]

  attivo: boolean = false;

  animaliComplessi = [
    { nome: "gatto", verso: "miao" },
    { nome: "cane", verso: "bau" },
    { nome: "cavallo", verso: "hihihihi" }
  ]

  pippo() {

    for (const animale of this.animaliComplessi) {
      animale.nome
    }

  }
}
