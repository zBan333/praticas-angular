import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviandoTextoComponent } from './enviando-texto.component';

describe('EnviandoTextoComponent', () => {
  let component: EnviandoTextoComponent;
  let fixture: ComponentFixture<EnviandoTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnviandoTextoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnviandoTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
