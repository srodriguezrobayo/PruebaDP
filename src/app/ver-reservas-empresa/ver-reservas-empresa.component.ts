import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpresaModel, reservaModel  } from '../Tablas/shared/acciones.model';
import { AccionesService} from '../Tablas/shared/acciones.service';
import { TodoModel } from '../Tablas/shared/acciones.model';
import { DatePipe,CurrencyPipe  } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ver-reservas-empresa',
  templateUrl: './ver-reservas-empresa.component.html',
  styleUrls: ['./ver-reservas-empresa.component.css']
})
export class VerReservasEmpresaComponent implements OnInit {
  empresa: Observable<EmpresaModel[]> | undefined
  pendiente: Observable<TodoModel[]> | undefined
  reserva: Observable<reservaModel[]> | undefined;
  sidebarActive = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router, // Corregir esta línea
    private accionesService: AccionesService,
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe
    
  ) {}
  urlimagen=this.accionesService.BASE_URL+"/uploads/"
  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {

  }

  ngOnInit(): void {

    let Id_Reservacion = this.reserva = this.route.snapshot.params['Id_Reservacion'];

    this.reserva = this.accionesService.VerReservaEspecifico(Id_Reservacion)
    console.log (this.reserva)

    let Correoelectronico_empresa = this.accionesService.obtenerCorreo()!

    this.empresa = this.accionesService.informacionEmpresa(Correoelectronico_empresa)
    console.log (this.empresa)

    this.reserva = this.accionesService.VerReservaEspecifico(Id_Reservacion)
    console.log (this.reserva)

  }

  borrarReservacion(id: string) {
    this.accionesService.borrarreservacion(id).subscribe(data => {
      console.log(data);
      alert(data);
      this.router.navigate(['/principal_empresa']); // Corregir esta línea
    });
  }
  cerrarsesion() {
    sessionStorage.clear()
    this.router.navigate(['/inicio_sesion']);
  }
}

