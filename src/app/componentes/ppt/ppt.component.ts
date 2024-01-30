import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})
export class PptComponent implements OnInit {

  texto: string = "";
  texto2: string = "";
  texto3: string = "";

  eleccionesDis: string[] = ["piedra", "papel", "tijeras"];

  ngOnInit(): void {
    this.texto = "¡PIEDRA, PAPEL O TIJERA! ELIGE TU ELECCION"
  }

  elegir(eleccion: string) {
    this.texto = "Elegiste: " + eleccion;

    var eleccionM = Math.floor(Math.random() * 3); //se multipilica por 3 y se optiene un numero entre cero y tres (con decimales). 

    this.eleccionesDis[eleccionM];
    this.texto2 = "La maquina ha elegido: " + this.eleccionesDis[eleccionM];

    if ((eleccion == "tijeras" && this.eleccionesDis[eleccionM] == "papel") ||
      (eleccion == "papel" && this.eleccionesDis[eleccionM] == "piedra")
      || (eleccion == "piedra" && this.eleccionesDis[eleccionM] == "tijeras")) {
      this.texto3 = "GANASTE";
    } else if ((eleccion == "tijeras" && this.eleccionesDis[eleccionM] == "piedra") ||
      (eleccion == "papel" && this.eleccionesDis[eleccionM] == "tijeras")
      || (eleccion == "piedra" && this.eleccionesDis[eleccionM] == "papel")) {
      this.texto3 = "PIERDES";
    }
    else {
      this.texto3 = "EMPATE";
    }
  }

}
