import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEmpresaComponent } from './lista-empresa.component';

describe('ListaEmpresaComponent', () => {
  let component: ListaEmpresaComponent;
  let fixture: ComponentFixture<ListaEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaEmpresaComponent]
    });
    fixture = TestBed.createComponent(ListaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
