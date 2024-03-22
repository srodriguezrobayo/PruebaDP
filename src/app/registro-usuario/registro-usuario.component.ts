import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { CiudadModel, ClienteModel, GeneroModel } from '../Tablas/shared/acciones.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  usuario = new ClienteModel("", "", "", "", "", "", "", "");
  ciudades: CiudadModel[] = [];
  generos: GeneroModel[] = [];

  constructor(
    private accionesService: AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerCiudades();
    this.obtenerGeneros();
  }

  obtenerCiudades() {
    this.accionesService.obtenerciudad().subscribe(
      (data: CiudadModel[]) => {
        this.ciudades = data;
      },
      error => {
        console.log('Error al obtener las ciudades:', error);
      }
    );
  }

  obtenerGeneros() {
    this.accionesService.obtenergenero().subscribe(
      (data: GeneroModel[]) => {
        this.generos = data;
      },
      error => {
        console.log('Error al obtener los generos:', error);
      }
    );
  }

  onSubmit() {
    this.usuario.Password_cliente = this.usuario.Password_cliente.toString();
    this.accionesService.agregarUsuario(this.usuario).subscribe(
      (data: any) => {
        if (data.message === 'El cliente ya está registrado') {
          alert('El cliente ya está registrado');
        } else {
          alert(data);
          this.router.navigate(['/inicio_sesion']);
        }
      },
      (error) => {
        console.error('Error:', error);
        alert('Error al registrar el usuario. Por favor, inténtalo de nuevo.');
      }
    );
  }
}
