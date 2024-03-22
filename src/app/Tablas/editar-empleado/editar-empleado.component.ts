import { Component, OnInit } from '@angular/core';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { EmpleadoModel, Tipo_usuarioModel } from '../shared/acciones.model';
import { MD5 } from 'crypto-js';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit{

  id=''
  empleado = new EmpleadoModel("","","","","","","")

  constructor(
      private accionesService : AccionesService,
      private route: ActivatedRoute,
      private router: Router
  ){ }

  ngOnInit(){
    this.id = this.route.snapshot.params ['id']
    if (this.id){
      console.log('EDITAR');
      this.accionesService.obtenerempleadoid(this.id).subscribe(data => {
        this.empleado = data[0]
      },error =>{
        console.log(error)
      })
    }else{
      console.log("CREAR")
    }
  }
  onSubmit() {
    console.log('onSubmit');
    this.empleado.Password_empleado = MD5(this.empleado.Password_empleado).toString();
    if(this.empleado.id_empleado){
      this.accionesService.actualizarempleado(this.empleado).subscribe(data =>{
        alert (data)
        this.router.navigate(['/empleado'])
      })
    }else {
      console.log('crear');
      this.accionesService.agregarempleado(this.empleado).subscribe(data => {
        alert (data)
        this.router.navigate(['/empleado'])
      })
    }
  }
}
