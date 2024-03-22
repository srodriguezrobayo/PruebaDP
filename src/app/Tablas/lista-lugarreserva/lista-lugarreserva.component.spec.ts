import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLugarreservaComponent } from './lista-lugarreserva.component';

describe('ListaLugarreservaComponent', () => {
  let component: ListaLugarreservaComponent;
  let fixture: ComponentFixture<ListaLugarreservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaLugarreservaComponent]
    });
    fixture = TestBed.createComponent(ListaLugarreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
