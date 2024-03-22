import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LugarReservacionModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';

@Component({
  selector: 'app-lista-lugarreserva',
  templateUrl: './lista-lugarreserva.component.html',
  styleUrls: ['./lista-lugarreserva.component.css']
})
export class ListaLugarreservaComponent implements OnInit{

  lugar_reserva: Observable<LugarReservacionModel[]> | undefined

  constructor (private accionesService: AccionesService){}

  ngOnInit() {
      this.lugar_reserva = this.accionesService.obtenerlugarreserva();
  }

  borrarLugarReserva (id: string){
    this.accionesService.borrarlugarreserva(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}