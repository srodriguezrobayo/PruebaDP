import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { EmpresaModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';


@Component({
  selector: 'app-lista-empresa',
  templateUrl: './lista-empresa.component.html',
  styleUrls: ['./lista-empresa.component.css']
})
export class ListaEmpresaComponent implements OnInit{

  empresa: Observable<EmpresaModel[]> | undefined;

  constructor (private accionesService: AccionesService){}

  ngOnInit(){
      this.empresa = this.accionesService.obtenerempresa();
  }

  borrarEmpresa (id: string){
    this.accionesService.borrarempresa(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}

