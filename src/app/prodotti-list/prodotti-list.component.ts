import { Component } from '@angular/core';
import { Prodotto } from '../models/prodotto';

@Component({
  selector: 'app-prodotti-list',
  templateUrl: './prodotti-list.component.html',
  styleUrls: ['./prodotti-list.component.css']
})
export class ProdottiListComponent {
  // facciamo finta che questi dati siano arrivati da un database
  prodotti: Prodotto[] = [
    {
      id: 1,
      nome: "Bici",
      prezzo: 120
    },
    {
      id: 2,
      nome: "Salame",
      prezzo: 10
    }
  ]
}
