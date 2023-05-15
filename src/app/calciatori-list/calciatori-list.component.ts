import { Component } from '@angular/core';
import { Calciatore } from '../models/calciatore';

@Component({
  selector: 'app-calciatori-list',
  templateUrl: './calciatori-list.component.html',
  styleUrls: ['./calciatori-list.component.css']
})
export class CalciatoriListComponent {
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
}
