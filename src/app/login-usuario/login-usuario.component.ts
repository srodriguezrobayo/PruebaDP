import { Component, OnInit } from '@angular/core';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { Route,Router,ActivatedRoute,ParamMap, Params } from '@angular/router';

import { ClienteModel, EmpresaModel, ReservacionModel } from '../Tablas/shared/acciones.model';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css']
})
export class LoginUsuarioComponent {



  empresaExistente: EmpresaModel=new EmpresaModel("","","","","","","","")
  isPasswordFocused: boolean = false;

  ////
  reservacionExistente: ReservacionModel= new ReservacionModel("","","","","","","","","","","","","")
  usuarioExistente: ClienteModel=new ClienteModel("","","","","","","","")
constructor (private router: Router, private accionesService: AccionesService){}

entrarusuario(){
  this.accionesService.loginUsuario(this.usuarioExistente).subscribe(
    response=>{
      alert("inicio sesion exitoso");
      sessionStorage.setItem("Correoelectronico_cliente",this.usuarioExistente.Correoelectronico_cliente);
      sessionStorage.setItem("Cliente_id_Cliente ",this.reservacionExistente.Cliente_id_Cliente );
      this.usuarioExistente=new ClienteModel("","","","","","","","");
      this.reservacionExistente=new ReservacionModel("","","","","","","","","","","","","");
      this.router.navigate(["/principal"])
    },
    error=>{
      alert("error al iniciar")
    }
  )
}


}


