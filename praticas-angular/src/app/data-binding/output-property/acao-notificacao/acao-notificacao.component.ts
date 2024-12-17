import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-acao-notificacao',
  standalone: false,

  templateUrl: './acao-notificacao.component.html',
  styleUrl: './acao-notificacao.component.scss'
})
export class AcaoNotificacaoComponent {

  @Output() emitNotification = new EventEmitter();

  notificar(){
    this.emitNotification.emit('Notificação realizada no filho');
  }


}
