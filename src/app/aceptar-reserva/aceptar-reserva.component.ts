import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ReservacionModel, ServicioModel,LugarReservacionModel, ClienteModel } from '../Tablas/shared/acciones.model';
import { AccionesService } from '../Tablas/shared/acciones.service';

@Component({
  selector: 'app-aceptar-reserva',
  templateUrl: './aceptar-reserva.component.html',
  styleUrls: ['./aceptar-reserva.component.css']
})
export class AceptarReservaComponent implements OnInit {
  reservaciones: Observable<ReservacionModel[]> | undefined;
  servicio: Observable<ServicioModel[]> | undefined;
  lugar: Observable<LugarReservacionModel[]> | undefined;
  cliente: Observable<ClienteModel[]> | undefined;
  reservacion = new ReservacionModel("","","","","","","","","","","","",""); 
  idReservacion: string = '';

  constructor(private accionesService: AccionesService, private route: ActivatedRoute, private router:Router) {}

  ngOnInit(): void {
    this.idReservacion = this.route.snapshot.params['id'];
    this.obtenerReservacion();

    this.reservaciones?.subscribe(reservaciones => {
      let idServicio = reservaciones[0].Servicio_idServicio;
      this.servicio = this.accionesService.obtenerservicioid(idServicio); 
    })

    this.reservaciones?.subscribe(reservaciones => {
      let ID_lugreserv = reservaciones[0].Lugar_reservacion_idLugar_reservacion;
      this.lugar = this.accionesService.obtenerlugarreservaid(ID_lugreserv);
    })

    this.reservaciones?.subscribe(reservaciones => {
      let id_Cliente = reservaciones[0].Cliente_id_Cliente;
      this.cliente = this.accionesService.obtenerclienteid(id_Cliente)
    })
  }

  obtenerReservacion(): void {
    this.reservaciones=this.accionesService.obtenerreservacionidu(this.idReservacion);
    }

  aceptarReserva(): void {
    if(this.reservacion.Valor == "0" || this.reservacion.Valor == "" || this.reservacion.Valor == null){
      alert ("No hay un precio, por favor asigne un valor");
      return;
    }
    this.reservacion.Id_Reservacion=this.idReservacion
    this.accionesService.AceptarReserva(this.reservacion)
      .subscribe(() => {
        console.log('Reserva aceptada correctamente');
        alert('Reserva aceptada correctamente')
        this.router.navigate(['../principal_empresa'])
      });
  }
}
