import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FileUploadModule } from 'ng2-file-upload';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { LoginEmpresaComponent } from './login-empresa/login-empresa.component';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PrincipalEmpresaComponent } from './principal-empresa/principal-empresa.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { VistaEmpresaComponent } from './vista-empresa/vista-empresa.component';
import { ReservaComponent } from './reserva/reserva.component';
import { SegundaPagComponent } from './segunda-pag/segunda-pag.component';
import { RegistroAdminComponent } from './registro-admin/registro-admin.component';
import { ReservasPendientesComponent } from './reservas-pendientes/reservas-pendientes.component';
import { AccionesService } from './Tablas/shared/acciones.service';


import { EditarTipoUsuarioComponent } from './Tablas/editar-tipo-usuario/editar-tipo-usuario.component';
import { ListaTipoUsuarioComponent } from './Tablas/lista-tipo-usuario/lista-tipo-usuario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { EditarEmpleadoComponent } from './Tablas/editar-empleado/editar-empleado.component';
import { ListaEmpleadoComponent } from './Tablas/lista-empleado/lista-empleado.component';
import { ListaGeneroComponent } from './Tablas/lista-genero/lista-genero.component';
import { EditarGeneroComponent } from './Tablas/editar-genero/editar-genero.component';
import { EditarDepartamentoComponent } from './Tablas/editar-departamento/editar-departamento.component';
import { ListaDepartamentoComponent } from './Tablas/lista-departamento/lista-departamento.component';
import { EditarCiudadComponent } from './Tablas/editar-ciudad/editar-ciudad.component';
import { ListaCiudadComponent } from './Tablas/lista-ciudad/lista-ciudad.component';
import { EditarLugarreservaComponent } from './Tablas/editar-lugarreserva/editar-lugarreserva.component';
import { ListaLugarreservaComponent } from './Tablas/lista-lugarreserva/lista-lugarreserva.component';
import { EditarServicioComponent } from './Tablas/editar-servicio/editar-servicio.component';
import { ListaServicioComponent } from './Tablas/lista-servicio/lista-servicio.component';
import { EditarClienteComponent } from './Tablas/editar-cliente/editar-cliente.component';
import { ListaClienteComponent } from './Tablas/lista-cliente/lista-cliente.component';
import { EditarEmpresaComponent } from './Tablas/editar-empresa/editar-empresa.component';
import { ListaEmpresaComponent } from './Tablas/lista-empresa/lista-empresa.component';
import { EditarReservacionComponent } from './Tablas/editar-reservacion/editar-reservacion.component';
import { ListaReservacionComponent } from './Tablas/lista-reservacion/lista-reservacion.component';
import { InicioPrincipalComponent } from './inicio-principal/inicio-principal.component';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';
import { VerReservaComponent } from './ver-reserva/ver-reserva.component';
import { EditarPerfilUsuarioComponent } from './editar-perfil-usuario/editar-perfil-usuario.component';
import { EditarPerfilEmpresaComponent } from './editar-perfil-empresa/editar-perfil-empresa.component';
import { VerReservasEmpresaComponent } from './ver-reservas-empresa/ver-reservas-empresa.component';
import { EditarReservacionesPendientesComponent } from './editar-reservaciones-pendientes/editar-reservaciones-pendientes.component';
import { AceptarReservaComponent } from './aceptar-reserva/aceptar-reserva.component';
import { EditarReservaCComponent } from './editar-reserva-c/editar-reserva-c.component';
import { VerReservaCompletoCComponent } from './ver-reserva-completo-c/ver-reserva-completo-c.component';
import { ContrasenaClienteComponent } from './contrasena-cliente/contrasena-cliente.component';
import { ContrasenaEmpresaComponent } from './contrasena-empresa/contrasena-empresa.component';
import { ContrasenaAdminComponent } from './contrasena-admin/contrasena-admin.component';
import { RechazarReservaComponent } from './rechazar-reserva/rechazar-reserva.component';





@NgModule({
  declarations: [
    AppComponent,
    RegistroUsuarioComponent,
    LoginUsuarioComponent,
    LoginEmpresaComponent,
    RegistroEmpresaComponent,
    PaginaPrincipalComponent,
    PrincipalEmpresaComponent,
    PerfilEmpresaComponent,
    PerfilUsuarioComponent,
    VistaEmpresaComponent,
    ReservaComponent,
    SegundaPagComponent,
    RegistroAdminComponent,
    ReservasPendientesComponent,
    EditarTipoUsuarioComponent,
    ListaTipoUsuarioComponent,
    NavbarComponent,
    InicioComponent,
    EditarEmpleadoComponent,
    ListaEmpleadoComponent,
    ListaGeneroComponent,
    EditarGeneroComponent,
    EditarDepartamentoComponent,
    ListaDepartamentoComponent,
    EditarCiudadComponent,
    ListaCiudadComponent,
    EditarLugarreservaComponent,
    ListaLugarreservaComponent,
    EditarServicioComponent,
    ListaServicioComponent,
    EditarClienteComponent,
    ListaClienteComponent,
    EditarEmpresaComponent,
    ListaEmpresaComponent,
    EditarReservacionComponent,
    ListaReservacionComponent,
    InicioPrincipalComponent,
    VerReservaComponent,
    EditarPerfilUsuarioComponent,
    EditarPerfilEmpresaComponent,
    VerReservasEmpresaComponent,
    EditarReservacionesPendientesComponent,
    AceptarReservaComponent,
    EditarReservaCComponent,
    VerReservaCompletoCComponent,
    ContrasenaClienteComponent,
    ContrasenaEmpresaComponent,
    ContrasenaAdminComponent,
    RechazarReservaComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FileUploadModule,
  ],
  providers: [
    AccionesService,[DatePipe],[CurrencyPipe],
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
