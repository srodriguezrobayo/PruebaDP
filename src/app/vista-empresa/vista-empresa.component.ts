import { AccionesService } from './../Tablas/shared/acciones.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EmpresaModel } from '../Tablas/shared/acciones.model';
import { ClienteModel } from '../Tablas/shared/acciones.model';
import { CiudadModel } from '../Tablas/shared/acciones.model';
import { DepartamentoModel } from '../Tablas/shared/acciones.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-empresa',
  templateUrl: './vista-empresa.component.html',
  styleUrls: ['./vista-empresa.component.css']
})
export class VistaEmpresaComponent implements OnInit {

  empresa: Observable<EmpresaModel[]> | undefined;
  cliente: Observable<ClienteModel[]> | undefined;
  ciudad: Observable<CiudadModel[]> | undefined;
  departamento: Observable<DepartamentoModel[]> | undefined;

  constructor(
    private accionesService: AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  urlimagen = this.accionesService.BASE_URL+"/uploads/";

  ngOnInit() {
    let Nit_Empresa = this.route.snapshot.params['Nit_Empresa'];
    this.empresa = this.accionesService.VerEmpresasEspecifico(Nit_Empresa);

    let Correoelectronico_cliente = this.accionesService.obtenerCorreoUsuario()!;
    this.cliente = this.accionesService.informacionUsuario(Correoelectronico_cliente);

    this.empresa.subscribe(empresa => {
      let id_Ciudad = empresa[0].Ciudad_id_Ciudad;
      this.ciudad = this.accionesService.obtenerciudadid(id_Ciudad);
      this.ciudad.subscribe(ciudad => {
        if (ciudad.length > 0) {
          let idDepartamento = ciudad[0].Departamento_idDepartamento;
          this.departamento = this.accionesService.obtenerdepartamentoid(idDepartamento);
        }
      })
    });
  }

  sidebarActive = false;

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {}

  cerrarsesion() {
    sessionStorage.clear();
    this.router.navigate(['/inicio_sesion']);
  }
}
