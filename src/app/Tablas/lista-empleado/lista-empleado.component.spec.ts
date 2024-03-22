import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmpleadoComponent } from './lista-empleado.component';

describe('ListaEmpleadoComponent', () => {
  let component: ListaEmpleadoComponent;
  let fixture: ComponentFixture<ListaEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaEmpleadoComponent]
    });
    fixture = TestBed.createComponent(ListaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
