import { Component, OnChanges, OnInit, SimpleChanges, Input, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  standalone: false,

  templateUrl: './ciclo.component.html',
  styleUrl: './ciclo.component.scss'
})
export class CicloComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() inputValue: string = '';

  @ViewChild('tituloElemento') campoValorTitulo!: ElementRef;

  message: string = '';

  previousValue: string = '';

  contador: number = 0;
  intervalId: any

  constructor() {
    this.intervalId = setInterval(() => {
      this.contador++;
    }, 1000);
    console.log(this.intervalId);
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

  ngAfterViewInit() {
    this.campoValorTitulo.nativeElement.style.color = 'red';
    this.campoValorTitulo.nativeElement.style.fontSize = '18px';
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    console.log('ngOnDestroy foi executado: Contador limpo.');
  }
}
