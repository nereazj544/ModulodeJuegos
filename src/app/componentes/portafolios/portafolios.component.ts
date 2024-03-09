import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolios',
  templateUrl: './portafolios.component.html',
  styleUrls: ['./portafolios.component.css']
})
export class PortafoliosComponent {

  nombre: string = '';
  email: string = '';
  enviarDatos(datos: { nombre: string, email: string, mensaje: string}){
    console.log("Formulario eviado", datos);
    
    //!Con esto lo que hara es que se muestre solo por la consola del navegador
  }

}
