import { ClienteModel, TodoModel } from './../Tablas/shared/acciones.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservas-pendientes',
  templateUrl: './reservas-pendientes.component.html',
  styleUrls: ['./reservas-pendientes.component.css']
})
export class ReservasPendientesComponent implements OnInit {
  clientes: Observable<ClienteModel[]> | undefined;
  todo: Observable<TodoModel[]> | undefined;

  constructor(private accionesService: AccionesService, private router: Router) {}
  urlimagen=this.accionesService.BASE_URL+"/uploads/"

  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {}

  ngOnInit() {
    // Ver reserva
    const Correoelectronico_cliente = this.accionesService.obtenerCorreoUsuario()!;

    this.clientes = this.accionesService.informacionUsuario(Correoelectronico_cliente);
    console.log(this.clientes);

    // Obtener reservas pendientes y ordenarlas por fecha más cercana
    this.todo = this.accionesService.VerReservasPendientes(Correoelectronico_cliente);
    this.todo.subscribe(reservas => {
      // Ordenar reservas por fecha ascendente
      this.todo = new Observable(observer => {
        observer.next(reservas.sort((a, b) => new Date(a.Fecha_reservacion).getTime() - new Date(b.Fecha_reservacion).getTime()));
        observer.complete();
      });
    });

    console.log(this.todo);
  }

  obtenerDia(fecha: string): string {
    const date = new Date(fecha);
    const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  }

  cerrarsesion() {
    sessionStorage.clear()
    this.router.navigate(['/inicio_sesion']);
  }
  borrarReservacion (id: string){
    this.accionesService.borrarreservacion(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}
