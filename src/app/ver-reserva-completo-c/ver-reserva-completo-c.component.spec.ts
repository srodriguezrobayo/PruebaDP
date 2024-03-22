import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerReservaCompletoCComponent } from './ver-reserva-completo-c.component';

describe('VerReservaCompletoCComponent', () => {
  let component: VerReservaCompletoCComponent;
  let fixture: ComponentFixture<VerReservaCompletoCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerReservaCompletoCComponent]
    });
    fixture = TestBed.createComponent(VerReservaCompletoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
