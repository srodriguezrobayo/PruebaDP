import { Component } from '@angular/core';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ServicioModel } from '../shared/acciones.model';

@Component({
  selector: 'app-editar-servicio',
  templateUrl: './editar-servicio.component.html',
  styleUrls: ['./editar-servicio.component.css']
})
export class EditarServicioComponent {

  id=''
  servicio = new ServicioModel("","")

  constructor(
    private accionesService : AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(){
    this.id = this.route.snapshot.params ['id']
    if (this.id){
      console.log('EDITAR');
      this.accionesService.obtenerservicioid(this.id).subscribe(data =>{
        this.servicio = data[0]
      },error =>{
        console.log(error)
      })
    }else{
      console.log ("CREAR")
    }
  }
  onSubmit(){
    console.log('onSubmit');
    if(this.servicio.idServicio){
      this.accionesService.actualizarservicio(this.servicio).subscribe(data => {
        alert (data)
        this.router.navigate(['/servicio'])
      })
    }else{
      console.log ('crear');
      this.accionesService.agregarservicio(this.servicio).subscribe(data => {
        alert(data)
        this.router.navigate(['/servicio'])
      })
    }
  }
}
