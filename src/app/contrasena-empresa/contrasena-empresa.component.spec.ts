import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrasenaEmpresaComponent } from './contrasena-empresa.component';

describe('ContrasenaEmpresaComponent', () => {
  let component: ContrasenaEmpresaComponent;
  let fixture: ComponentFixture<ContrasenaEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContrasenaEmpresaComponent]
    });
    fixture = TestBed.createComponent(ContrasenaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
