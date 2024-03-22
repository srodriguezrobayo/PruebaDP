import { Component, OnInit } from '@angular/core';
import {  ClienteModel, EmpleadoModel, ServicioModel, lugaryCiudadModel } from '../Tablas/shared/acciones.model';
import { Observable } from 'rxjs';
import { EmpresaModel } from '../Tablas/shared/acciones.model';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { Router,ActivatedRoute, Route} from '@angular/router';
import { ReservacionModel } from '../Tablas/shared/acciones.model';
@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']

})
export class ReservaComponent implements OnInit {

  clientes: Observable<ClienteModel[]> | undefined
  empresa: Observable<EmpresaModel[]> | undefined
  servicio: Observable<ServicioModel[]> | undefined;
  empleado: Observable<EmpleadoModel[]> | undefined;
  dos: Observable<lugaryCiudadModel[]> | undefined;
  reserva = new ReservacionModel("","","","","","","","","","","","","")

  constructor(
    private accionesService: AccionesService,private route:ActivatedRoute, private router: Router 

  ) { }

  urlimagen=this.accionesService.BASE_URL+"/uploads/"
  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {

  }

  ngOnInit(): void {
    //ver cliente
    let Correoelectronico_cliente = this.accionesService.obtenerCorreoUsuario()!
    this.clientes = this.accionesService.informacionUsuario(Correoelectronico_cliente)
    console.log (this.clientes)

    //ver empresa especifico
    let Nit_Empresa = this.empresa = this.route.snapshot.params['Nit_Empresa']

    this.empresa = this.accionesService.VerEmpresasEspecifico(Nit_Empresa)
    console.log (this.empresa)

    //ver servicios

    this.servicio = this.accionesService.VerServicio(Correoelectronico_cliente)
    console.log (this.servicio)


    this.empleado = this.accionesService.VerEmpleados(Correoelectronico_cliente)
    console.log (this.empleado)

    this.dos = this.accionesService.VerCiudadylugar(Correoelectronico_cliente)
    console.log (this.dos)
  }

  onSubmit(){
    this.Verificardisponibilidad();
  }

  Verificardisponibilidad() {
    const { Empresa_Nit_Empresa, Fecha_reservacion, Hora_reservacion } = this.reserva;

    this.accionesService.tiempo(Empresa_Nit_Empresa, Fecha_reservacion, Hora_reservacion).subscribe(
      (response: any) => {
        if (response.message === 'Ya está reservado') {
          alert("La fecha y hora ya están seleccionadas, por favor seleccione otra");
        } else {
          console.log("La fecha y hora seleccionada están disponibles");
          this.agendarreserva();
        }
      },
      (error) => {
        console.error("Error al verificar disponibilidad", error);
        alert("Error al verificar disponibilidad, Por favor, inténtelo más tarde");
      }
    );
}

  agendarreserva(){
    this.accionesService.agendar(this.reserva).subscribe(
      data => {
        alert("Reserva hecha con éxito");
        this.router.navigate(['/pendientes']);
      },
      error => {
        console.error("Error al agendar reserva", error);
        alert("Error al agendar reserva. Por favor, inténtelo más tarde.");
      }
    );
  }

  cerrarsesion() {
    sessionStorage.clear()
    this.router.navigate(['/inicio_sesion']);
  }

}
