import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoVisivelComponent } from './conteudo-visivel.component';

describe('ConteudoVisivelComponent', () => {
  let component: ConteudoVisivelComponent;
  let fixture: ComponentFixture<ConteudoVisivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConteudoVisivelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteudoVisivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
