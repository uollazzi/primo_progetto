import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persone-list',
  templateUrl: './persone-list.component.html',
  styleUrls: ['./persone-list.component.css']
})
export class PersoneListComponent implements OnInit {
  persona: Persona = {
    nome: "Mario",
    cognome: "Rossi",
    annoNascita: 1940,
    attivo: true,
    indirizzo: {
      via: "Via Roma",
      civico: "12",
      cap: 12345,
      localita: "Modena",
      prov: "MO"
    },
    indirizzi_spedizione: [
      {
        via: "Via Roma",
        civico: "12",
        cap: 12345,
        localita: "Modena",
        prov: "MO"
      },
      {
        via: "Via Resistenza",
        civico: "124",
        cap: 12345,
        localita: "Roma",
        prov: "RM"
      }
    ]
  };

  ngOnInit(): void {
    console.log(this.persona.indirizzo.via);
    console.log(this.persona.indirizzi_spedizione[1].civico);
  }


}
