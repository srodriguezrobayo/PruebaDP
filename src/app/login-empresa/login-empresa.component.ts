import { AccionesService } from './../Tablas/shared/acciones.service';
import { Component} from '@angular/core';


import { Route,Router,ActivatedRoute,ParamMap, Params } from '@angular/router';
import { EmpresaModel, ReservacionModel } from '../Tablas/shared/acciones.model';

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.css']
})
export class LoginEmpresaComponent   {

    reservacionExistente: ReservacionModel= new ReservacionModel("","","","","","","","","","","","","")
    empresaExistente: EmpresaModel=new EmpresaModel("","","","","","","","")
  constructor (private router: Router, private accionesService: AccionesService){}

  entrarempresa(){
    this.accionesService.loginEmpresa(this.empresaExistente).subscribe(
      response=>{
        alert("inicio sesion exitoso");
        sessionStorage.setItem("Correoelectronico_empresa",this.empresaExistente.Correoelectronico_empresa);
        sessionStorage.setItem("Empresa_Nit_Empresa",this.reservacionExistente.Empresa_Nit_Empresa);
        this.empresaExistente=new EmpresaModel("","","","","","","","");
        this.reservacionExistente=new ReservacionModel("","","","","","","","","","","","","");
        this.router.navigate(["/principal_empresa"])
      },
      error=>{
        alert("error al iniciarxd")
      }
    )
  }



}



