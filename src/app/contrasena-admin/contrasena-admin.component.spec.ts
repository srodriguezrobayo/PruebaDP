import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrasenaAdminComponent } from './contrasena-admin.component';

describe('ContrasenaAdminComponent', () => {
  let component: ContrasenaAdminComponent;
  let fixture: ComponentFixture<ContrasenaAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContrasenaAdminComponent]
    });
    fixture = TestBed.createComponent(ContrasenaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
