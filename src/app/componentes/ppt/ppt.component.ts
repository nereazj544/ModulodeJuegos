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
  img1: string = "";
  img2: string = "";
  img3: string = "";

  vM: number = 0;
  vU: number = 0;


  eleccionesDis: string[] = ["piedra", "papel", "tijeras"];

  ngOnInit(): void {
    this.texto = "¡PIEDRA, PAPEL O TIJERA! ELIGE TU ELECCION"
  }

  elegir(eleccion: string) {

    //!Reseteo de imagenes
    this.img1 = "";
    this.img2 = "";
    this.img3 = "";


    this.texto = "Elegiste: " + eleccion;

    var eleccionM = Math.floor(Math.random() * 3); 
    //!Sin floor se quedan como decimales, con el floor se redondea a cero y a tres. 

    this.eleccionesDis[eleccionM];
    this.texto2 = "La maquina ha elegido: " + this.eleccionesDis[eleccionM];

    if ((eleccion == "tijeras" && this.eleccionesDis[eleccionM] == "papel") ||
      (eleccion == "papel" && this.eleccionesDis[eleccionM] == "piedra")
      || (eleccion == "piedra" && this.eleccionesDis[eleccionM] == "tijeras")) {
      this.vU++;
        this.img1 = '/../../assets/img/GANAS.jpg';
      //!Esto hara que se muestre la imagen de que has ganado.
    } else if ((eleccion == "tijeras" && this.eleccionesDis[eleccionM] == "piedra") ||
    (eleccion == "papel" && this.eleccionesDis[eleccionM] == "tijeras")
    || (eleccion == "piedra" && this.eleccionesDis[eleccionM] == "papel")) {
      this.vM++;
      // this.texto3 = "PIERDES";
      this.img2 = '/../../assets/img/PIERDES.png';
      //!Esto hara que se muestre la imagen de que has perdido.
    }
    else {
      this.img3 = '/../../assets/img/Empate.png';
      //!Esto hara que se muestre la imagen de que has empatado.
      
    }
  }



  
  /**  
   * !CLASE
   * 
   * 
   * texto: string = "";
   * texto2: string = "";
   * texto3: string = ""; 
   * eleccionesDis: string[] = ["piedra", "papel", "tijeras"];
   * ngOnInit(): void {
   *     this.texto = "¡PIEDRA, PAPEL O TIJERA! ELIGE TU ELECCION"
   *   }
   *   elegir(eleccion: string) {
   *     this.texto = "Elegiste: " + eleccion;
   *     var eleccionM = Math.floor(Math.random() * 3); //se multipilica por 3 y se optiene un numero entre cero y tres (con decimales). 
   *     this.eleccionesDis[eleccionM];
   *    this.texto2 = "La maquina ha elegido: " + 
   *    this.eleccionesDis[eleccionM];
   *     if ((eleccion == "tijeras" && this.
   * eleccionesDis[eleccionM] == "papel") ||
   * (eleccion == "papel" && this.eleccionesDis
   * [eleccionM] == "piedra")
   *  || (eleccion == "piedra" && this.eleccionesDis
   * [eleccionM] == "tijeras")) {
   *         this.texto3 = "GANASTE";
   *       } else if ((eleccion == "tijeras" && 
   * this.eleccionesDis[eleccionM] == "piedra") ||
   *       (eleccion == "papel" && 
   * this.eleccionesDis[eleccionM] == "tijeras")
   *       || (eleccion == "piedra" && this.
   * eleccionesDis[eleccionM] == "papel")) {
   *         this.texto3 = "PIERDES";
   *  }else {
   *   this.texto3 = "EMPATE";
   * }
   * }
    */

}
