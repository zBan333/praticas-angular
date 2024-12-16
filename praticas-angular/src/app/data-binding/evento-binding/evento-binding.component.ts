import { Component } from '@angular/core';

@Component({
  selector: 'app-evento-binding',
  standalone: false,

  templateUrl: './evento-binding.component.html',
  styleUrl: './evento-binding.component.scss'
})
export class EventoBindingComponent {
  mensage: string = 'Mensagem';

  mensageInput: string = ' ';

  buttonText: string = 'Clique em mim!';

  contador: number = 0;

  clickButton() {
    this.mensage = 'Hello World!';
  }

  valorInput(value: string) {
    this.mensageInput = value;
  }

  toggleText() {
    this.buttonText = 'Botão Clicado!';
  }

  incremantaValor() {
    this.contador++;
  }
}
