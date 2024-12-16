import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  standalone: false,

  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.scss'
})
export class ClassBindingComponent {
  isRed: boolean = false;

  fontSize: number = 16;

  isHighLight: boolean = false;

  bgColor: string = 'white';

  mudarCor() {
    this.isRed = !this.isRed;
  }

  aumentarFonte() {
    this.fontSize++;
  }

  diminuirFonte() {
    this.fontSize--;
  }

  mudarDestaque() {
    this.isHighLight = !this.isHighLight;
  }

  mudarBgColor(color: string) {
    this.bgColor = color;
  }
}
