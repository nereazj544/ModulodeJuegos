import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppt',
  templateUrl: './ppt.component.html',
  styleUrls: ['./ppt.component.css']
})


/**
 * ! IMPORTANTE
 ** > Comentarios explicando algunos procesos en plan, nota mentales. 

* ! IMPLEMENTACION DE LOS CORAZONES
* ! Contador a modo de texto (sin la imprtacion de los corazones (simplemente un "marcador"))
*
* !HTML
** <div class="marcador">
**   <p>Usuario: {{vU}}</p>
**  <p>Maquina: {{vM}}</p>
** </div>
*! TypeScript
** Dentro del export se crean las variables de los contadores tanto de la maquina como del user. 
* vM: number = 0;
* vU: number = 0; 
** Dentro del ifelse se especifica cuando se va aumentar uno y cuando el otro. Cuando sea la maquina sera cuando el usario pierda contra la maquina y cuando sea el usuario sera cuando el usuario gane a la maquina.
* this.vU++;
* this.vM++;
*/
export class PptComponent implements OnInit {

  
  //!textos
  texto: string = "";
  texto2: string= "";
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

    

    } else if ((eleccion == "tijeras" && this.eleccionesDis[eleccionM] == "piedra") ||
      (eleccion == "papel" && this.eleccionesDis[eleccionM] == "tijeras")
      || (eleccion == "piedra" && this.eleccionesDis[eleccionM] == "papel")) {
      this.img2 = '../../assets/img/PIERDES.png';
      
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

    this.corazonesmaq = ["../../assets/img/corazoon.png","../../assets/img/corazoon.png", "../../assets/img/corazoon.png", "../../assets/img/corazoon.png", "../../assets/img/corazoon.png"];
    this.corazonesuser = ["../../assets/img/corazoon.png","../../assets/img/corazoon.png", "../../assets/img/corazoon.png", "../../assets/img/corazoon.png", "../../assets/img/corazoon.png"];
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
