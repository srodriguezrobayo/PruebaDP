import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoUsuarioComponent } from './lista-tipo-usuario.component';

describe('ListaTipoUsuarioComponent', () => {
  let component: ListaTipoUsuarioComponent;
  let fixture: ComponentFixture<ListaTipoUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaTipoUsuarioComponent]
    });
    fixture = TestBed.createComponent(ListaTipoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
