import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReservasEmpresaComponent } from './ver-reservas-empresa.component';

describe('VerReservasEmpresaComponent', () => {
  let component: VerReservasEmpresaComponent;
  let fixture: ComponentFixture<VerReservasEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerReservasEmpresaComponent]
    });
    fixture = TestBed.createComponent(VerReservasEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
