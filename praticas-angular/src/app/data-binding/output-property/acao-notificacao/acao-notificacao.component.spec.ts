import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaoNotificacaoComponent } from './acao-notificacao.component';

describe('AcaoNotificacaoComponent', () => {
  let component: AcaoNotificacaoComponent;
  let fixture: ComponentFixture<AcaoNotificacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcaoNotificacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcaoNotificacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
