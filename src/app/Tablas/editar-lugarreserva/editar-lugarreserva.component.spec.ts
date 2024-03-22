import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarLugarreservaComponent } from './editar-lugarreserva.component';

describe('EditarLugarreservaComponent', () => {
  let component: EditarLugarreservaComponent;
  let fixture: ComponentFixture<EditarLugarreservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarLugarreservaComponent]
    });
    fixture = TestBed.createComponent(EditarLugarreservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
