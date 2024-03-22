import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../Tablas/shared/acciones.model';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrasena-cliente',
  templateUrl: './contrasena-cliente.component.html',
  styleUrls: ['./contrasena-cliente.component.css']
})
export class ContrasenaClienteComponent implements OnInit {
  cliente: ClienteModel = new ClienteModel("","","","","","","","");
  correoExiste: boolean = false;
  contrasenaRestaurada: boolean = false;

  constructor(private accionesService: AccionesService, private router:Router) { }

  ngOnInit(): void {
  }

  // buscarCliente(): void {
  //   this.accionesService.olvidoCliente(this.cliente.Correoelectronico_cliente).subscribe(
  //     (data) => {
  //       if (data.length > 0) {
  //         this.correoExiste = true;
  //       } else {
  //         this.correoExiste = false;
  //       }
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

  buscarCliente(): void {
    this.accionesService.olvidoCliente(this.cliente).subscribe(
      (data) => {
        if (data == "Si hay registros") {
          this.correoExiste = true;
        } else {
          this.correoExiste = false;
          this.contrasenaRestaurada = true; // Agregar esta línea para resetear el formulario de contraseña
          console.log("Usuario no registrado");
          alert ("Usuario no registrado");
          this.router.navigate(['../registro_cliente'])
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  restaurarContrasena(): void {
    this.accionesService.restaurarCliente(this.cliente).subscribe(
      (data) => {
        this.contrasenaRestaurada = true;
        console.log("Contraseña actualizada con exito");
        alert("Contraseña actualizada con exito");
        this.router.navigate(['../inicio_sesion'])
      },
      (error) => {
        console.error(error);
      }
    );
  }
}