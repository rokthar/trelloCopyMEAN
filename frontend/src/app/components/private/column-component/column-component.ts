import { Component } from '@angular/core';

@Component({
  selector: 'app-column-component',
  templateUrl: './column-component.html',
  styleUrls: ['./column-component.scss']
})
export class ColumnComponent {
  constructor(){}

  agregarTask(e){
    if (e.keyCode === 13){
      e.preventDefault();
      alert("Hola");
    }
  }
}
