import { Component, OnInit } from '@angular/core';
import { AccionesService } from '../shared/acciones.service';
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { GeneroModel } from '../shared/acciones.model';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent {

  id=''
  genero = new GeneroModel("","")

  constructor(
    private accionesService : AccionesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(){
    this.id = this.route.snapshot.params ['id']
    if (this.id){
      console.log('EDITAR');
      this.accionesService.obtenergeneroid(this.id).subscribe(data =>{
        this.genero = data[0]
      },error =>{
        console.log(error)
      })
    }else{
      console.log ("CREAR")
    }
  }
  onSubmit(){
    console.log('onSubmit');
    if(this.genero.idGenero){
      this.accionesService.actualizargenero(this.genero).subscribe(data => {
        alert (data)
        this.router.navigate(['/genero'])
      })
    }else{
      console.log ('crear');
      this.accionesService.agregargenero(this.genero).subscribe(data => {
        alert(data)
        this.router.navigate(['/genero'])
      })
    }
  }

}
