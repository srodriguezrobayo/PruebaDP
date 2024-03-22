import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGeneroComponent } from './lista-genero.component';

describe('ListaGeneroComponent', () => {
  let component: ListaGeneroComponent;
  let fixture: ComponentFixture<ListaGeneroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaGeneroComponent]
    });
    fixture = TestBed.createComponent(ListaGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
