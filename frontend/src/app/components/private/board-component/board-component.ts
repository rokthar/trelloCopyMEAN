import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-component',
  templateUrl: './board-component.html',
  styleUrls: ['./board-component.scss']
})
export class BoardComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
  }

  abrir(){
    alert("Hola");
  }
}
