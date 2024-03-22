import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ReservacionModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';

@Component({
  selector: 'app-lista-reservacion',
  templateUrl: './lista-reservacion.component.html',
  styleUrls: ['./lista-reservacion.component.css']
})
export class ListaReservacionComponent implements OnInit{

  reservacion: Observable<ReservacionModel[]> | undefined;

  constructor (private accionesService: AccionesService){}

  ngOnInit(){
      this.reservacion = this.accionesService.obtenerreservacion();
  }

  borrarReservacion (id: string){
    this.accionesService.borrarreservacion(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}
