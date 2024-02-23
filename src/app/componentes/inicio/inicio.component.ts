import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  //!metodo para poner una pagina random
  /*
    r:string[] = ['', '**', '/piedra-papel-tijera', '/portafolios'];
  
    constructor(private router:Router){
    
    }
    
    random(){
      var eleccion = Math.floor(Math.random()*4);
      this.router.navigate([this.r[eleccion]]);
    
  }
  */

  handleSearch(value: string){
    console.log(value)
  }
  
}
