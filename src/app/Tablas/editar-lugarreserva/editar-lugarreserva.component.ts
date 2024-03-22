import { Component } from '@angular/core';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { LugarReservacionModel } from '../shared/acciones.model';

@Component({
  selector: 'app-editar-lugarreserva',
  templateUrl: './editar-lugarreserva.component.html',
  styleUrls: ['./editar-lugarreserva.component.css']
})
export class EditarLugarreservaComponent {

  id=''
  lugar_reserva = new LugarReservacionModel("","","","")

  constructor(
    private accionesService : AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(){
    this.id = this.route.snapshot.params ['id']
    if (this.id){
      console.log('EDITAR');
      this.accionesService.obtenerlugarreservaid(this.id).subscribe(data =>{
        this.lugar_reserva = data[0]
      },error =>{
        console.log(error)
      })
    }else{
      console.log ("CREAR")
    }
  }
  onSubmit(){
    console.log('onSubmit');
    if(this.lugar_reserva.ID_lugreserv){
      this.accionesService.actualizarlugarreserva(this.lugar_reserva).subscribe(data => {
        alert (data)
        this.router.navigate(['/lugar_reserva'])
      })
    }else{
      console.log ('crear');
      this.accionesService.agregarlugarreserva(this.lugar_reserva).subscribe(data => {
        alert(data)
        this.router.navigate(['/lugar_reserva'])
      })
    }
  }


}
