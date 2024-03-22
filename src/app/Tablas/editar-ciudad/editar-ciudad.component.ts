import { Component } from '@angular/core';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { CiudadModel } from '../shared/acciones.model';

@Component({
  selector: 'app-editar-ciudad',
  templateUrl: './editar-ciudad.component.html',
  styleUrls: ['./editar-ciudad.component.css']
})
export class EditarCiudadComponent {

  id=''
  ciudad = new CiudadModel("","","")

  constructor(
    private accionesService : AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(){
    this.id = this.route.snapshot.params ['id']
    if (this.id){
      console.log('EDITAR');
      this.accionesService.obtenerciudadid(this.id).subscribe(data =>{
        this.ciudad = data[0]
      },error =>{
        console.log(error)
      })
    }else{
      console.log ("CREAR")
    }
  }
  onSubmit(){
    console.log('onSubmit');
    if(this.ciudad.id_Ciudad){
      this.accionesService.actualizarciudad(this.ciudad).subscribe(data => {
        alert (data)
        this.router.navigate(['/ciudad'])
      })
    }else{
      console.log ('crear');
      this.accionesService.agregarciudad(this.ciudad).subscribe(data => {
        alert(data)
        this.router.navigate(['/ciudad'])
      })
    }
  }

}
