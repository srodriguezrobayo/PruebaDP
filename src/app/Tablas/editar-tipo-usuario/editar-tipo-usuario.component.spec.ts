import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoUsuarioComponent } from './editar-tipo-usuario.component';

describe('EditarTipoUsuarioComponent', () => {
  let component: EditarTipoUsuarioComponent;
  let fixture: ComponentFixture<EditarTipoUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarTipoUsuarioComponent]
    });
    fixture = TestBed.createComponent(EditarTipoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
