import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { EmpleadoModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit{

  empleado: Observable<EmpleadoModel[]> | undefined;

  constructor (private accionesService: AccionesService){}

  ngOnInit(){
      this.empleado = this.accionesService.obtenerempleado();
  }

  borrarEmpleado (id: string){
    this.accionesService.borrarempleado(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}

