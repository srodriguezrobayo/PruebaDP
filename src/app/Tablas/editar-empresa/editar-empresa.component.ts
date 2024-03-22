import { Component } from '@angular/core';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { EmpresaModel } from '../shared/acciones.model';
import { MD5 } from 'crypto-js';

@Component({
  selector: 'app-editar-empresa',
  templateUrl: './editar-empresa.component.html',
  styleUrls: ['./editar-empresa.component.css']
})
export class EditarEmpresaComponent {

  id=''
  empresa = new EmpresaModel("","","","","","","","")

  constructor(
    private accionesService : AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(){
    this.id = this.route.snapshot.params ['id']
    if (this.id){
      console.log('EDITAR');
      this.accionesService.obtenerempresaid(this.id).subscribe(data =>{
        this.empresa = data[0]
      },error =>{
        console.log(error)
      })
    }else{
      console.log ("CREAR")
    }
  }
  onSubmit(){
    console.log('onSubmit');
    this.empresa.Password_empresa = MD5(this.empresa.Password_empresa).toString();
    if(this.empresa.Nit_Empresa){
      this.accionesService.actualizarempresa(this.empresa).subscribe(data => {
        alert (data)
        this.router.navigate(['/empresa'])
      })
    }else{
      console.log ('crear');
      this.accionesService.agregarempresa(this.empresa).subscribe(data => {
        alert(data)
        this.router.navigate(['/empresa'])
      })
    }
  }

}
