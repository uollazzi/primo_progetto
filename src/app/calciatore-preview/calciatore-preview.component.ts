import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Calciatore } from '../models/calciatore';

@Component({
  selector: 'app-calciatore-preview',
  templateUrl: './calciatore-preview.component.html',
  styleUrls: ['./calciatore-preview.component.css']
})
export class CalciatorePreviewComponent {

  @Input()
  calciatore?: Calciatore;

  @Output()
  onTiroEffettuato = new EventEmitter<Calciatore>();

  @Output()
  onDelete = new EventEmitter<Calciatore>();

  tira() {
    console.log("preview.tira():", this.calciatore);

    this.onTiroEffettuato.emit(this.calciatore);
  }

  cancellami() {
    this.onDelete.emit(this.calciatore);
  }
}
