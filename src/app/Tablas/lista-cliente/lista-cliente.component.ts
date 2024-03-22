import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit{

  cliente: Observable<ClienteModel[]> | undefined;

  constructor (private accionesService: AccionesService){}

  ngOnInit(){
      this.cliente = this.accionesService.obtenercliente();
  }

  borrarCliente (id: string){
    this.accionesService.borrarcliente(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}
