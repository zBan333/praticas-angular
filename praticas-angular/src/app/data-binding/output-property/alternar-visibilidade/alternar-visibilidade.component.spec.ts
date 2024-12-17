import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternarVisibilidadeComponent } from './alternar-visibilidade.component';

describe('AlternarVisibilidadeComponent', () => {
  let component: AlternarVisibilidadeComponent;
  let fixture: ComponentFixture<AlternarVisibilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlternarVisibilidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternarVisibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
