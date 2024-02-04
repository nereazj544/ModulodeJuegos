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
  texto3: string= "";
  texto4: string= "";

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
  cpummaq: string [] = ["../../assets/img/cpuum.png", "../../assets/img/cpuum.png", "../../assets/img/cpuum.png", "../../assets/img/cpuum.png", "../../assets/img/cpuum.png"]; 


  //!Reseteo de la partida / Mensaje de fin del juego
  resteo: boolean = false;
  fin: boolean = false;

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
      this.img1 = '../../../assets/img/GANAS.png';
      this.cUser++;
      this.corazonesmaq.length--;
      
    } else if ((eleccion == "tijeras" && this.eleccionesDis[eleccionM] == "piedra") ||
      (eleccion == "papel" && this.eleccionesDis[eleccionM] == "tijeras")
      || (eleccion == "piedra" && this.eleccionesDis[eleccionM] == "papel")) {
        this.img2 = '/../../assets/img/PIERDES.png';
      this.cMaq++;
      this.cUser--;
      this.corazonesuser.length--;
    }
    else {
      this.img3 = '/../../assets/img/Empate.png';
      
    }
    
    
    //!MENSAJE DE FIN DEL JUEGO
    if (this.corazonesuser.length === 0) {
      this.fin = true;
      this.texto4= "Resultado de la partida: ";
      this.texto3 = "HAS PERDIDO.";
    }else if(this.corazonesmaq.length === 0) {
      this.fin = true;
      this.texto4= "Resultado de la partida: ";
      this.texto3 = "HAS GANADO.";
    }
  }

  //!RESETO DEL JUEGO
  rest(){
    this.resteo = false;
    
    //!TEXTOS REST
    this.texto2="";
    this.texto3="";
    this.texto4="";


    //!IMAGENES REST
    this.img1 = "";
    this.img2 = "";
    this.img3 = "";

    //!CONTADOR REST
    this.cMaq= 0 ;
    this.cUser= 0;

    this.corazonesmaq = ["../../assets/img/corazoon.png","../../assets/img/corazoon.png", "../../assets/img/corazoon.png", "../../assets/img/corazoon.png", "../../assets/img/corazoon.png"];
    this.corazonesuser = ["../../assets/img/corazoon.png","../../assets/img/corazoon.png", "../../assets/img/corazoon.png", "../../assets/img/corazoon.png", "../../assets/img/corazoon.png"];
  }

  }