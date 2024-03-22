import { Component } from '@angular/core';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ClienteModel } from '../shared/acciones.model';
import { MD5 } from 'crypto-js';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent {

  id=''
  cliente = new ClienteModel("","","","","","","","")

  constructor(
    private accionesService : AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(){
    this.id = this.route.snapshot.params ['id']
    if (this.id){
      console.log('EDITAR');
      this.accionesService.obtenerclienteid(this.id).subscribe(data =>{
        this.cliente = data[0]
      },error =>{
        console.log(error)
      })
    }else{
      console.log ("CREAR")
    }
  }
  onSubmit(){
    console.log('onSubmit');
    this.cliente.Password_cliente = MD5(this.cliente.Password_cliente).toString();
    if(this.cliente.id_Cliente){
      this.accionesService.actualizarcliente(this.cliente).subscribe(data => {
        alert (data)
        this.router.navigate(['/cliente'])
      })
    }else{
      console.log ('crear');
      this.accionesService.agregarcliente(this.cliente).subscribe(data => {
        alert(data)
        this.router.navigate(['/cliente'])
      })
    }
  }
}
