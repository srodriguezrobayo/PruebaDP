import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartamentoModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';

@Component({
  selector: 'app-lista-departamento',
  templateUrl: './lista-departamento.component.html',
  styleUrls: ['./lista-departamento.component.css']
})
export class ListaDepartamentoComponent implements OnInit{

  departamento: Observable<DepartamentoModel[]> | undefined

  constructor (private accionesService: AccionesService){}

  ngOnInit() {
      this.departamento = this.accionesService.obtenerdepartamento();
  }

  borrarDepartamento (id: string){
    this.accionesService.borrardepartamento(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}
