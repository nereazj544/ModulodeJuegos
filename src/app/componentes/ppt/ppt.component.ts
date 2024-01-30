import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {
  
  texto:string="";

  ngOnInit(): void {
    this.texto = "¡PIEDRA, PAPEL O TIJERA! ELIGE TU ELECCION"
  }

}
