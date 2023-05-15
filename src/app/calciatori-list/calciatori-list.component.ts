import { Component, OnInit } from '@angular/core';
import { Calciatore } from '../models/calciatore';

@Component({
  selector: 'app-calciatori-list',
  templateUrl: './calciatori-list.component.html',
  styleUrls: ['./calciatori-list.component.css']
})
export class CalciatoriListComponent implements OnInit {
  calciatori: Calciatore[] = [
    {
      nome: "Francesco Totti",
      numero: 10,
      piede: "destro"
    },
    {
      nome: "Roberto Baggio",
      numero: 10,
      piede: "destro"
    },
    {
      nome: "Roberto Carlos",
      numero: 3,
      piede: "sinistro"
    },
    {
      nome: "Ismael Benacer",
      numero: 4,
      piede: "sinistro"
    }
  ]

  messaggio = "";

  ngOnInit(): void {
    this.inserisci({ nome: "Pippo", numero: 9, piede: "destro" });
  }

  tiroInPorta(calciatore: Calciatore) {
    console.log("list.tiroInPorta() - Ha tirato in porta", calciatore.nome);

    this.messaggio = `Ha tirato in porta ${calciatore.nome} (${calciatore.numero}) di ${calciatore.piede}`;
  }

  elimina(c: Calciatore) {
    let i = this.calciatori.indexOf(c);
    console.log(i);
    if (i > -1) {
      this.calciatori.splice(i, 1);
    }
  }

  inserisci(c: Calciatore) {
    this.calciatori.push(c);
  }
}
