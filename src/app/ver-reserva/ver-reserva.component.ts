import { Component,OnInit } from '@angular/core';
import { ClienteModel, reservaModel } from '../Tablas/shared/acciones.model';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { DatePipe,CurrencyPipe  } from '@angular/common';

@Component({
  selector: 'app-ver-reserva',
  templateUrl: './ver-reserva.component.html',
  styleUrls: ['./ver-reserva.component.css']
})
export class VerReservaComponent implements OnInit {
  
  sidebarActive = false;

  reserva: Observable<reservaModel[]> | undefined;
  cliente: Observable<ClienteModel[]> | undefined;


  constructor(private route: ActivatedRoute, private accionesService: AccionesService, private datePipe: DatePipe, private currencyPipe: CurrencyPipe, private router: Router,) {}
  urlimagen=this.accionesService.BASE_URL+"/uploads/"

  ngOnInit(): void {

    let Id_Reservacion = this.reserva = this.route.snapshot.params['Id_Reservacion'];

    this.reserva = this.accionesService.VerReservaEspecifico(Id_Reservacion)
    console.log (this.reserva)

    let Correoelectronico_cliente = this.accionesService.obtenerCorreoUsuario()!
    this.cliente = this.accionesService.informacionUsuario(Correoelectronico_cliente)
    console.log (this.cliente)

  }

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {

  }

  cerrarsesion() {
    sessionStorage.clear()
    this.router.navigate(['/inicio_sesion']);
  }

  borrarReservacion(id: string) {
    this.accionesService.borrarreservacion(id).subscribe(data => {
      console.log(data);
      alert(data);
      this.router.navigate(['/pendientes']); // Corregir esta línea
    });
  }
}
