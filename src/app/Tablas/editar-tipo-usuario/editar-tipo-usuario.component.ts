import { Component, OnInit } from '@angular/core';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Tipo_usuarioModel } from '../shared/acciones.model';


@Component({
  selector: 'app-editar-tipo-usuario',
  templateUrl: './editar-tipo-usuario.component.html',
  styleUrls: ['./editar-tipo-usuario.component.css']
})
export class EditarTipoUsuarioComponent implements OnInit{

  id=''
  tipo_usuario =new Tipo_usuarioModel("","","");

  constructor(
    private accionesService: AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {  }

  ngOnInit() {
    this.id = this.route.snapshot.params ['id']
    if (this.id){
      console.log("EDITAR");
      this.accionesService.obtenerTipoUsuarioid(this.id).subscribe(data => {
        this.tipo_usuario = data[0]
      }, error =>{
        console.log(error)
      })
    } else{ 
      console.log ("CREAR")
    }
  }
  onSubmit() {
    console.log('onSubmit');
    
    if (this.tipo_usuario.idTipo_usuario){
      this.accionesService.actualizarTipoUsuario(this.tipo_usuario).subscribe (data =>{
      alert (data)
      this.router.navigate(['/tipo_usuario'])
    })
  }else{
    console.log ('crear');
    this.accionesService.agregarTipoUsuario(this.tipo_usuario).subscribe(data => {
      alert(data)
      this.router.navigate(['/tipo_usuario'])
      })
    }
  }
}
