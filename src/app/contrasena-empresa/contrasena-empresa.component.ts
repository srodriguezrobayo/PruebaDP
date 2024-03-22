import { Component, OnInit } from '@angular/core';
import { EmpresaModel } from '../Tablas/shared/acciones.model';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrasena-empresa',
  templateUrl: './contrasena-empresa.component.html',
  styleUrls: ['./contrasena-empresa.component.css']
})
export class ContrasenaEmpresaComponent implements OnInit {
  empresa: EmpresaModel = new EmpresaModel("","","","","","","","");
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

  buscarEmpresa(): void {
    this.accionesService.olvidoEmpresa(this.empresa).subscribe(
      (data) => {
        if (data == "Si hay registros") {
          this.correoExiste = true;
        } else {
          this.correoExiste = false;
          this.contrasenaRestaurada = true; // Agregar esta línea para resetear el formulario de contraseña
          console.log("Empresa no registrada");
          alert ("Empresa no registrado");
          this.router.navigate(['../registro_empresa'])
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  restaurarContrasena(): void {
    this.accionesService.restaurarEmpresa(this.empresa).subscribe(
      (data) => {
        this.contrasenaRestaurada = true;
        console.log("Contraseña actualizada con exito");
        alert("Contraseña actualizada con exito");
        this.router.navigate(['../inicio_sesion_empresa'])
      },
      (error) => {
        console.error(error);
      }
    );
  }
}