import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasPendientesComponent } from './reservas-pendientes.component';

describe('ReservasPendientesComponent', () => {
  let component: ReservasPendientesComponent;
  let fixture: ComponentFixture<ReservasPendientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservasPendientesComponent]
    });
    fixture = TestBed.createComponent(ReservasPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
