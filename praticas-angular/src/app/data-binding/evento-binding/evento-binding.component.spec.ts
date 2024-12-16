import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoBindingComponent } from './evento-binding.component';

describe('EventoBindingComponent', () => {
  let component: EventoBindingComponent;
  let fixture: ComponentFixture<EventoBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventoBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
