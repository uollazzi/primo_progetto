import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primo_progetto';

  pagina = "calciatori";

  pagine = [
    "prodotti",
    "calciatori",
    "pokemon"
  ];

  naviga(p: string) {
    this.pagina = p;
  }
}
