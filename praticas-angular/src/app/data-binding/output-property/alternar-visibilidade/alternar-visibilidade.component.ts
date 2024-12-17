import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alternar-visibilidade',
  standalone: false,

  templateUrl: './alternar-visibilidade.component.html',
  styleUrl: './alternar-visibilidade.component.scss'
})
export class AlternarVisibilidadeComponent {

  @Output() visibilidade = new EventEmitter();

  isVisivel: boolean = true;

  alternar(){
    this.isVisivel = !this.isVisivel;
    this.visibilidade.emit(this.isVisivel);
  }
}
