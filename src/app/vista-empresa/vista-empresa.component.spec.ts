import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEmpresaComponent } from './vista-empresa.component';

describe('VistaEmpresaComponent', () => {
  let component: VistaEmpresaComponent;
  let fixture: ComponentFixture<VistaEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaEmpresaComponent]
    });
    fixture = TestBed.createComponent(VistaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
