import { Component, Input } from '@angular/core';
import { Calciatore } from '../models/calciatore';

@Component({
  selector: 'app-calciatore-preview',
  templateUrl: './calciatore-preview.component.html',
  styleUrls: ['./calciatore-preview.component.css']
})
export class CalciatorePreviewComponent {

  @Input()
  calciatore?: Calciatore;
}
