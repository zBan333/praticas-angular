import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-enviando-texto',
  standalone: false,

  templateUrl: './enviando-texto.component.html',
  styleUrl: './enviando-texto.component.scss'
})
export class EnviandoTextoComponent {

  @Output() textoEmitido = new EventEmitter();

  enviarTexto(evento: any){
    const input = evento.target as HTMLInputElement;
    this.textoEmitido.emit(input.value);
  }

}
