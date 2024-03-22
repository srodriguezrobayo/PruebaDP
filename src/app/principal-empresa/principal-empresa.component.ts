
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AccionesService } from '../Tablas/shared/acciones.service';

import { ClienteModel, EmpresaModel, LugarReservacionModel, ReservacionModel, ServicioModel, TodoModel } from '../Tablas/shared/acciones.model';




@Component({
  selector: 'app-principal-empresa',
  templateUrl: './principal-empresa.component.html',
  styleUrls: ['./principal-empresa.component.css']
})
export class PrincipalEmpresaComponent implements OnInit {
  empresa: Observable<EmpresaModel[]> | undefined

 pendiente: Observable<TodoModel[]> | undefined
  constructor (private router: Router, private accionesService: AccionesService ){}

  urlimagen=this.accionesService.BASE_URL+"/uploads/"

  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {

  }



  ngOnInit() {

    //ver reservas pendientes
    let Correoelectronico_empresa = this.accionesService.obtenerCorreo()!

    this.empresa = this.accionesService.informacionEmpresa(Correoelectronico_empresa)
    console.log (this.empresa)

    this.pendiente = this.accionesService.informacionReservasPendientes(Correoelectronico_empresa)
    console.log (this.pendiente)
  }
  obtenerDia(fecha: string): string {
    const date = new Date(fecha);
    const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  }

  borrarReservacion (id: string){
    this.accionesService.borrarreservacion(id).subscribe(data => {
      console.log(data);
      alert (data);
      window.location.reload()
    })
  }
  cerrarsesion() {
    sessionStorage.clear()
    this.router.navigate(['/inicio_sesion']);
  }
}
