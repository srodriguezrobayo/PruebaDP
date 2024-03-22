import { Component, OnInit } from '@angular/core';
import { AccionesService } from '../Tablas/shared/acciones.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteModel,CiudadModel,GeneroModel } from '../Tablas/shared/acciones.model';
// import { MD5 } from 'crypto-js';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-editar-perfil-usuario',
  templateUrl: './editar-perfil-usuario.component.html',
  styleUrls: ['./editar-perfil-usuario.component.css']
})
export class EditarPerfilUsuarioComponent implements OnInit{
  imagen = "";
   id='';
   cliente = new ClienteModel ("","","","","","","","");
   ciudades: CiudadModel[] = [];
   generos: GeneroModel[] = [];

   constructor(
     private accionesService : AccionesService,
     private route : ActivatedRoute,
     private router : Router
   ){}

   ngOnInit(): void{
    this.obtenerCiudades();
    this.obtenerGeneros();
     this.id = this.route.snapshot.params ['id']
     if (this.id){
       console.log('EDITAR');
       this.accionesService.obtenerclienteidu(this.id).subscribe(data => {
         this.cliente = data[0]
       },error =>{
         console.log(error)
       })
     }
   }
   obtenerCiudades() {
    this.accionesService.obtenerciudad().subscribe(
      (data: CiudadModel[]) => {
        this.ciudades = data;
      },
      error => {
        console.log('Error al obtener las ciudades:', error);
      }
    );
  }
  obtenerGeneros() {
    this.accionesService.obtenergenero().subscribe(
      (data: GeneroModel[]) => {
        this.generos = data;
      },
      error => {
        console.log('Error al obtener los generos:', error);
      }
    );
  }

   selectImage(event: any) {
    const file = event.target.files[0];
    this.imagen = file;
  }

   onSubmit(){
    let formd = new FormData();
    formd.append('file',this.imagen);
    this.accionesService.AgregarImagen(formd).subscribe(data => {
      if (data == "No hay archivos"){
        alert(data)
      }else{
        this.cliente.Foto_cliente = data
      }
    })
     console.log('OnSubmit');
    //  this.cliente.Password_cliente = MD5(this.cliente.Password_cliente).toString();
     if(this.cliente.id_Cliente){
       this.accionesService.actualizarclienteu(this.cliente).subscribe(data2 => {
        console.log(this.cliente)
        alert (data2)
       this.router.navigate(['/perfil_cliente'])
    })
    }
   }
   sidebarActive = false;

   toggleSidebar() {
     this.sidebarActive = !this.sidebarActive;
   }
 
   setActiveLink() {}
 
   cerrarsesion() {
     sessionStorage.clear();
     this.router.navigate(['/inicio_sesion']);
   }

}

