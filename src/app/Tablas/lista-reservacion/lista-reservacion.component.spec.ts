import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReservacionComponent } from './lista-reservacion.component';

describe('ListaReservacionComponent', () => {
  let component: ListaReservacionComponent;
  let fixture: ComponentFixture<ListaReservacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaReservacionComponent]
    });
    fixture = TestBed.createComponent(ListaReservacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
