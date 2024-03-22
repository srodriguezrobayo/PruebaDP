import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReservacionesPendientesComponent } from './editar-reservaciones-pendientes.component';

describe('EditarReservacionesPendientesComponent', () => {
  let component: EditarReservacionesPendientesComponent;
  let fixture: ComponentFixture<EditarReservacionesPendientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarReservacionesPendientesComponent]
    });
    fixture = TestBed.createComponent(EditarReservacionesPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
