import { Component, OnChanges, OnInit, SimpleChanges, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  standalone: false,

  templateUrl: './ciclo.component.html',
  styleUrl: './ciclo.component.scss'
})
export class CicloComponent implements OnInit, OnChanges, OnDestroy {

  @Input() inputValue: string = '';

  message: string = '';

  previousValue: string = '';

  contador: number = 0;
  intervalId

  constructor() {
    this.intervalId = setInterval(() => {
      this.contador++;
    }, 1000)
  }

  stopCounter() {
    clearInterval(this.intervalId);
    console.log('Contador parado manualmente');

  }

  ngOnInit(){
    this.message = 'Componente carregado com sucesso';
    console.log('ngOnInit foi Executado.');
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['inputValue']){
      this.previousValue = changes['inputValue'].previousValue || '';
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    console.log('ngOnDestroy foi executado: Contador limpo.');
  }
}
