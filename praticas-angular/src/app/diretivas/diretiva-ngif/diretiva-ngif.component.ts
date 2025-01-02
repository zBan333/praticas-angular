import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  standalone: false,

  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.scss'
})
export class DiretivaNgifComponent {
  mostrarTexto: boolean = false;

  mostrarInput: boolean = false

  showChild: boolean = false;

  ShowInfo: boolean = false;

  onMostrarTexto(){
    this.mostrarTexto = !this.mostrarTexto;
  }

  onChangeInput(){
    this.mostrarInput = !this.mostrarInput;
  }

  onChangeChild(){
    this.showChild = !this.showChild;
  }

  onChangeInfo(){
    this.ShowInfo = !this.ShowInfo;
  }
}
