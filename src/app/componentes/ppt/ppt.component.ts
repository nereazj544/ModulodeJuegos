import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})


export class PptComponent implements OnInit {

  //!textos
  texto: string = "";
  texto2: string= "";

  //!CONTADOR IMPROBISADO POR EL MOMENTO
  cUser: number = 0;
  cMaq: number = 0;

  //! IMAGENES DE LOS RESULTADOS
  img1: string = "";
  img2: string = "";
  img3: string = "";


  //! IMAGENES DE LOS CORAZONES
  corazonesuser: string [] = ["../../assets/img/corazoon.png","../../assets/img/corazoon.png", "../../assets/img/corazoon.png", "../../assets/img/corazoon.png", "../../assets/img/corazoon.png"];
  cpumuser: string [] = ["../../assets/img/cpuum.png", "../../assets/img/cpuum.png", "../../assets/img/cpuum.png", "../../assets/img/cpuum.png", "../../assets/img/cpuum.png"];

  //! CORAZONES MAQUINA
  corazonesmaq: string [] = ["../../assets/img/corazoon.png","../../assets/img/corazoon.png", "../../assets/img/corazoon.png", "../../assets/img/corazoon.png", "../../assets/img/corazoon.png"];
  cpummaq: string [] = ["../../assets/img/cpuum.png", "../../assets/img/cpuum.png", "../../assets/img/cpuum.png", "../../assets/img/cpuum.png", "../../assets/img/cpuum.png"]; //! CORAZONES "VACIOS"


  //!Reseteo de la partida
  resteo: boolean = false;

  eleccionesDis: string[] = ["piedra", "papel", "tijeras"];

  ngOnInit(): void {
    this.texto = "¡PIEDRA, PAPEL O TIJERA! ELIGE TU ELECCION"
  }

  elegir(eleccion: string) {
    this.img1 = "";
    this.img2 = "";
    this.img3 = "";

    var eleccionM = Math.floor(Math.random() * 3); //se multipilica por 3 y se optiene un numero entre cero y tres (con decimales). 

    this.eleccionesDis[eleccionM];
    this.texto2 = "La maquina ha elegido: " + this.eleccionesDis[eleccionM];

    if ((eleccion == "tijeras" && this.eleccionesDis[eleccionM] == "papel") ||
      (eleccion == "papel" && this.eleccionesDis[eleccionM] == "piedra")
      || (eleccion == "piedra" && this.eleccionesDis[eleccionM] == "tijeras")) {
      this.img1 = '../../assets/img/GANAS.png';
      this.cUser++;
    

    } else if ((eleccion == "tijeras" && this.eleccionesDis[eleccionM] == "piedra") ||
      (eleccion == "papel" && this.eleccionesDis[eleccionM] == "tijeras")
      || (eleccion == "piedra" && this.eleccionesDis[eleccionM] == "papel")) {
      this.img2 = '../../assets/img/PIERDES.png';
      this.cMaq++;
      this.cUser--;
      
    }
    else {
      this.img3 = '../../assets/img/Empate.png';
      
    }
  }

  //!RESETO DEL JUEGO
  rest(){
    this.resteo = false;
    
    this.texto2="";
    this.img1 = "";
    this.img2 = "";
    this.img3 = "";
    this.cMaq= 0 ;
    this.cUser= 0;

    this.corazonesmaq = ["../../assets/img/corazoon.png","../../assets/img/corazoon.png", "../../assets/img/corazoon.png", "../../assets/img/corazoon.png", "../../assets/img/corazoon.png"];
    this.corazonesuser = ["../../assets/img/corazoon.png","../../assets/img/corazoon.png", "../../assets/img/corazoon.png", "../../assets/img/corazoon.png", "../../assets/img/corazoon.png"];
  }

  }