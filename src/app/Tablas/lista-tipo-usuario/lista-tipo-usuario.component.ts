import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Tipo_usuarioModel } from '../shared/acciones.model';
import { AccionesService } from '../shared/acciones.service';

@Component({
  selector: 'app-lista-tipo-usuario',
  templateUrl: './lista-tipo-usuario.component.html',
  styleUrls: ['./lista-tipo-usuario.component.css']
})
export class ListaTipoUsuarioComponent implements OnInit{

  tipo_usuarios: Observable<Tipo_usuarioModel[]> | undefined;

  constructor(private accionesService: AccionesService){}

  ngOnInit(){
      this.tipo_usuarios = this.accionesService.obtenerTipoUsuario();
  }

  borrarTipoUsuario(id: string){
    this.accionesService.borrarTipoUsuario(id).subscribe(data => {
      console.log(data);
      alert (data);
    })
  }
}
