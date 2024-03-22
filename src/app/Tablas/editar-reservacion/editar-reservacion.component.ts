import { Component } from '@angular/core';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { ReservacionModel } from '../shared/acciones.model';

@Component({
  selector: 'app-editar-reservacion',
  templateUrl: './editar-reservacion.component.html',
  styleUrls: ['./editar-reservacion.component.css']
})
export class EditarReservacionComponent {

  id=''
  reservacion = new ReservacionModel("","","","","","","","","","","","","")

  constructor(
    private accionesService : AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(){
    this.id = this.route.snapshot.params ['id']
    if (this.id){
      console.log('EDITAR');
      this.accionesService.obtenerreservacionid(this.id).subscribe(data =>{
        this.reservacion = data[0]
      },error =>{
        console.log(error)
      })
    }else{
      console.log ("CREAR")
    }
  }
  onSubmit(){
    console.log('onSubmit');
    if(this.reservacion.Id_Reservacion){
      this.accionesService.actualizarreservacion(this.reservacion).subscribe(data => {
        alert (data)
        this.router.navigate(['/reservacion'])
      })
    }else{
      console.log ('crear');
      this.accionesService.agregarreservacion(this.reservacion).subscribe(data => {
        alert(data)
        this.router.navigate(['/reservacion'])
      })
    }
  }


}
