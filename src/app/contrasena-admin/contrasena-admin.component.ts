import { Component , OnInit } from '@angular/core';
import { EmpleadoModel } from '../Tablas/shared/acciones.model';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrasena-admin',
  templateUrl: './contrasena-admin.component.html',
  styleUrls: ['./contrasena-admin.component.css']
})
export class ContrasenaAdminComponent implements OnInit {
  empleado: EmpleadoModel = new EmpleadoModel("","","","","","","");
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

  buscarEmpleado(): void {
    this.accionesService.olvidoAdmin(this.empleado).subscribe(
      (data) => {
        if (data == "Si hay registros") {
          this.correoExiste = true;
        } else {
          this.correoExiste = false;
          this.contrasenaRestaurada = true; // Agregar esta línea para resetear el formulario de contraseña
          console.log("Empleado no registrado");
          alert ("Empleado no registrado");
          this.router.navigate(['../registro_cliente'])
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  restaurarContrasena(): void {
    this.accionesService.restaurarAdmin(this.empleado).subscribe(
      (data) => {
        this.contrasenaRestaurada = true;
        console.log("Contraseña actualizada con exito");
        alert("Contraseña actualizada con exito");
        this.router.navigate(['../login-admin'])
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
