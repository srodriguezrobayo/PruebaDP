import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CiudadModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';

@Component({
  selector: 'app-lista-ciudad',
  templateUrl: './lista-ciudad.component.html',
  styleUrls: ['./lista-ciudad.component.css']
})
export class ListaCiudadComponent implements OnInit{

  ciudad: Observable<CiudadModel[]> | undefined

  constructor (private accionesService: AccionesService){}

  ngOnInit() {
      this.ciudad = this.accionesService.obtenerciudad();
  }

  borrarCiudad (id: string){
    this.accionesService.borrarciudad(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}
