import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  standalone: false,

  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.scss'
})
export class TwoWayBindingComponent {
  textStart: string = '';

  fontSize: number = 16;

  isDarkMode: boolean = false;

  valorRange: number = 50;
}
