import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';

@Component({
  selector: 'app-lista-servicio',
  templateUrl: './lista-servicio.component.html',
  styleUrls: ['./lista-servicio.component.css']
})
export class ListaServicioComponent implements OnInit{

  servicio: Observable<ServicioModel[]> | undefined

  constructor (private accionesService: AccionesService){}

  ngOnInit() {
      this.servicio = this.accionesService.obtenerservicio();
  }

  borrarServicio (id: string){
    this.accionesService.borrarservicio(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}
