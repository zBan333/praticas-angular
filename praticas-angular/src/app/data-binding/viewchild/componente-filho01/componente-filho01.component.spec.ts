import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFilho01Component } from './componente-filho01.component';

describe('ComponenteFilho01Component', () => {
  let component: ComponenteFilho01Component;
  let fixture: ComponentFixture<ComponenteFilho01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteFilho01Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteFilho01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
