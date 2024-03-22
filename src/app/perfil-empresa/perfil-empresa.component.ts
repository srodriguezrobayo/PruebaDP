import { Component, OnInit } from '@angular/core';
import { EmpresaperfilModel } from '../Tablas/shared/acciones.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AccionesService } from '../Tablas/shared/acciones.service';

@Component({
  selector: 'app-perfil-empresa',
  templateUrl: './perfil-empresa.component.html',
  styleUrls: ['./perfil-empresa.component.css']
})
export class PerfilEmpresaComponent implements OnInit {
  empresa: Observable<EmpresaperfilModel[]> | undefined

  sidebarActive = false;
  constructor (private router: Router, private accionesService: AccionesService ){}
  urlimagen=this.accionesService.BASE_URL+"/uploads/"
  toggleSidebar() {
    this.sidebarActive = !this.sidebarActive;
  }

  setActiveLink() {

  }

  ngOnInit(): void {
    const correoElectronico = this.accionesService.obtenerCorreo();

    if (correoElectronico) {
      this.empresa = this.accionesService.PerfilEmpresa(correoElectronico);
      this.empresa.subscribe(data => {
        // Log the user profile information
        console.log(data);
      });
    }
  }

  cerrarsesion() {
    sessionStorage.clear()
    this.router.navigate(['/inicio_sesion']);
  }
}
