import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ComponenteFilho01Component } from './componente-filho01/componente-filho01.component';

@Component({
  selector: 'app-viewchild',
  standalone: false,

  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.scss'
})
export class ViewchildComponent implements AfterViewInit{

  @ViewChild('paragrafoTexto') textoParagrafo!: ElementRef;

  @ViewChild('focarInput') inputFocus!: ElementRef;

  @ViewChild(ComponenteFilho01Component) componentFilho!: ComponenteFilho01Component;

  tituloFilho: string = '';

  mudarTexto(){
    this.textoParagrafo.nativeElement.textContent = 'Texto Mudado';
  }

  chamarFilho(){
    this.componentFilho.exibirMensagem();
  }

  ngAfterViewInit() {
    this.inputFocus.nativeElement.focus();
    this.tituloFilho = this.componentFilho.title;
  }
}
