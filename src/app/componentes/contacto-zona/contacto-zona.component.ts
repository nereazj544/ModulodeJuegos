import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contacto-zona',
  templateUrl: './contacto-zona.component.html',
  styleUrls: ['./contacto-zona.component.css']
})
export class ContactoZonaComponent {
  @Input () datosFormulario: any;
  @Output() enviarFormulario = new EventEmitter;

  constructor(){}

  enviar(){
    this.enviarFormulario.emit(this.datosFormulario);
  }

}
