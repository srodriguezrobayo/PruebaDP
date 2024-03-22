import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { EmpleadoModel } from '../Tablas/shared/acciones.model';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.css']
})
export class RegistroAdminComponent implements OnInit {
  empleado = new EmpleadoModel("", "", "", "", "", "", "");

  constructor(
    private accionesService: AccionesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Puedes realizar alguna lógica de inicialización si es necesario
  }

  onSubmit() {
    this.accionesService.loginEmpleado(this.empleado).subscribe(
      response => this.handleLoginResponse(response),
      error => {
        console.error('Error al iniciar sesión:', error);
        alert("Error al iniciar sesión"); // Puedes mostrar un mensaje de error más descriptivo
      }
    );
  }

  private handleLoginResponse(data: any) {
    if (data === 'Bienvenido') {
      alert(data);
      sessionStorage.setItem("Nom_Empleado", this.empleado.Nom_empleado);
      this.router.navigate(['/inicio']);
    } else {
      alert(data);
    }
  }
}