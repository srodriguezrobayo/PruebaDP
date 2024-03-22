import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { ClienteModel, EmpresaModel } from '../Tablas/shared/acciones.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit, OnDestroy {
  empresas: Observable<EmpresaModel[]> | undefined;
  cliente: Observable<ClienteModel[]> | undefined;
  numeroPaginas: number[] = [];
  urlimagen: string;

  sidebarActive = false;

  constructor(private router: Router, private accionesService: AccionesService) {
    this.urlimagen = this.accionesService.BASE_URL + "/uploads/";
  }

  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {
    
  }

  ngOnInit(): void {
    this.obtenerEmpresas();
    this.obtenerInformacionCliente();
  }

  ngOnDestroy(): void {
    
  }

  cerrarSesion() {
    sessionStorage.clear();
    this.router.navigate(['/inicio_sesion']);
  }

  private obtenerEmpresas(): void {
    const correo = this.accionesService.obtenerCorreo()!;
    this.empresas = this.accionesService.VerEmpresas(correo);

    this.empresas.subscribe(data => {
      const totalEmpresas = data.length;
      const totalPaginas = Math.ceil(totalEmpresas / 16);
      this.numeroPaginas = Array.from({ length: totalPaginas }, (_, index) => index + 1);
    });
  }

  private obtenerInformacionCliente(): void {
    const correoUsuario = this.accionesService.obtenerCorreoUsuario()!;
    this.cliente = this.accionesService.informacionUsuario(correoUsuario);
  }
}