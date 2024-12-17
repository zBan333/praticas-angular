import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoContadorComponent } from './botao-contador.component';

describe('BotaoContadorComponent', () => {
  let component: BotaoContadorComponent;
  let fixture: ComponentFixture<BotaoContadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotaoContadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
