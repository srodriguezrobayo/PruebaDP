import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarReservaCComponent } from './editar-reserva-c.component';

describe('EditarReservaCComponent', () => {
  let component: EditarReservaCComponent;
  let fixture: ComponentFixture<EditarReservaCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarReservaCComponent]
    });
    fixture = TestBed.createComponent(EditarReservaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
