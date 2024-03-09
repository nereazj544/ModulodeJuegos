import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contacto-zona',
  templateUrl: './contacto-zona.component.html',
  styleUrls: ['./contacto-zona.component.css']
})
export class ContactoZonaComponent {
  
  //* Con ! se indica que no puede ser null o undefined. Por lo que siempre se debe de tener un valor.
  
  @Input() nombre!:string; 
  @Input() email!:string;
  @Output() enviarFormulario = new EventEmitter<any>();

//  nombre: string="";
//  email: string = "";
mensaje: string = "";

  constructor(){}

  enviar(){
    this.enviarFormulario.emit({nombre: this.nombre, email: this.email, mensaje: this.mensaje});
    
  }

}
