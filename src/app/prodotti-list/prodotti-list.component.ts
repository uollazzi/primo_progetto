import { Component } from '@angular/core';
import { Prodotto } from '../models/prodotto';
import { PRODOTTI } from '../dati';

@Component({
  selector: 'app-prodotti-list',
  templateUrl: './prodotti-list.component.html',
  styleUrls: ['./prodotti-list.component.css']
})
export class ProdottiListComponent {
  // facciamo finta che questi dati siano arrivati da un database
  prodotti = PRODOTTI;
}
