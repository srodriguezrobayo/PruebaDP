import { Component, OnInit } from '@angular/core';


import { Route,Router,ActivatedRoute,ParamMap, Params } from '@angular/router';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { EmpresaModel, CiudadModel } from '../Tablas/shared/acciones.model';


@Component({
  selector: 'app-registro-empresa',
  templateUrl: './registro-empresa.component.html',
  styleUrls: ['./registro-empresa.component.css']
})
export class RegistroEmpresaComponent implements OnInit {

  empresa = new EmpresaModel("","","","","","","","")
  ciudades: CiudadModel[] = [];
  constructor(
    private accionesService: AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }



  ngOnInit(): void {
    this.obtenerCiudades();
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

  onSubmit(){
    this.empresa.Password_empresa = (this.empresa.Password_empresa).toString();
    this.accionesService.agregarEmpresa(this.empresa).subscribe((data:any) => {
      if (data.message === 'La empresa ya está regitrada'){
        alert ('La empresa ya está regitrada');
      }else{
        alert(data)
        this.router.navigate(['/inicio_sesion_empresa']);
      }
    },
    (error) => {
      console.error('Error:', error);
      alert('Error al registrar el usuario. Por favor, inténtalo de nuevo.');
    }
    );
  }
}
