import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { GeneroModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';

@Component({
  selector: 'app-lista-genero',
  templateUrl: './lista-genero.component.html',
  styleUrls: ['./lista-genero.component.css']
})
export class ListaGeneroComponent implements OnInit{

  genero: Observable<GeneroModel[]> | undefined

  constructor (private accionesService: AccionesService){}

  ngOnInit() {
      this.genero = this.accionesService.obtenergenero();
  }

  borrarGenero (id: string){
    this.accionesService.borrargenero(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}
