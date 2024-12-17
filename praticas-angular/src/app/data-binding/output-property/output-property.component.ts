import { Component } from '@angular/core';

@Component({
  selector: 'app-output-property',
  standalone: false,

  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.scss'
})
export class OutputPropertyComponent {
  valor = 0;

  text = '';

  isConteudoVisivel = true;

  notification = '';

  valorAtualizado(evento: any){
    this.valor = evento;
  }

  atulizarTexto(evento: any){
    this.text = evento;
  }

  conteudoVisivel(evento: any){
    this.isConteudoVisivel = evento;
  }

  showNotification(message: any){
    this.notification = message;
  }

}
