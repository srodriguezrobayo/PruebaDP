import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrasenaClienteComponent } from './contrasena-cliente.component';

describe('ContrasenaClienteComponent', () => {
  let component: ContrasenaClienteComponent;
  let fixture: ComponentFixture<ContrasenaClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContrasenaClienteComponent]
    });
    fixture = TestBed.createComponent(ContrasenaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
