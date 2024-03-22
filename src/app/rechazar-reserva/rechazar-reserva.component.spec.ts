import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechazarReservaComponent } from './rechazar-reserva.component';

describe('RechazarReservaComponent', () => {
  let component: RechazarReservaComponent;
  let fixture: ComponentFixture<RechazarReservaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechazarReservaComponent]
    });
    fixture = TestBed.createComponent(RechazarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
