import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: false,

  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.scss'
})
export class PropertyBindingComponent {
  userName: string = 'Usuario';
  userAge: string = 'Idade';
  userWork: string = 'Profissão';
  userImage: string = 'https://angular.io/assets/images/logos/angular/angular.png';

  horaAtual = new Date().toLocaleTimeString();

  corLampada: string = 'red';

  imagemProduto: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWnQdywvgp8J0q9hhHdFvM3GOVrxajsGSFTw&s';
  nomeProduto: string = 'Computador';
  precoProduto: number = 5000;
  estoqueProduto: number = 12;


  updateTime() {
    this.horaAtual = new Date().toLocaleTimeString();
  }

  mudarCor() {
    if (this.corLampada == 'red') {
      this.corLampada = 'yellow';
    } else if (this.corLampada == 'yellow') {
      this.corLampada = 'green';
    } else if (this.corLampada == 'green') {
      this.corLampada = 'red';
    }
  }

  mudarValor() {
    this.estoqueProduto = this.estoqueProduto > 0 ? this.estoqueProduto - 1 : 0;
  }
}
