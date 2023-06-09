import { Component, OnInit } from '@angular/core';
import { Calciatore } from '../models/calciatore';
import { CALCIATORI } from '../dati';

@Component({
  selector: 'app-calciatori-list',
  templateUrl: './calciatori-list.component.html',
  styleUrls: ['./calciatori-list.component.css']
})
export class CalciatoriListComponent implements OnInit {
  calciatori = CALCIATORI;

  nuovoCalciatore: Calciatore = { nome: "", numero: 0, piede: "destro" };

  messaggio = "";

  ngOnInit(): void {
    this.reset();
  }

  reset() {
    this.nuovoCalciatore = { nome: "", numero: 0, piede: "sinistro" };
  }

  tiroInPorta(calciatore: Calciatore) {
    console.log("list.tiroInPorta() - Ha tirato in porta", calciatore.nome);

    this.messaggio = `Ha tirato in porta ${calciatore.nome} (${calciatore.numero}) di ${calciatore.piede}`;
  }

  elimina(c: Calciatore) {
    let i = this.calciatori.indexOf(c);

    if (i > -1) {
      this.calciatori.splice(i, 1);
    }
  }

  inserisci() {
    this.calciatori.push(this.nuovoCalciatore);
    this.reset();
  }
}
