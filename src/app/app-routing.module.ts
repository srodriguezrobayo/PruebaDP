import { InicioPrincipalComponent } from './inicio-principal/inicio-principal.component';
import { VistaEmpresaComponent } from './vista-empresa/vista-empresa.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { RegistroEmpresaComponent } from './registro-empresa/registro-empresa.component';
import { LoginEmpresaComponent } from './login-empresa/login-empresa.component';
import { PrincipalEmpresaComponent } from './principal-empresa/principal-empresa.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { ReservaComponent } from './reserva/reserva.component';
import { SegundaPagComponent } from './segunda-pag/segunda-pag.component';
import { EditarTipoUsuarioComponent } from './Tablas/editar-tipo-usuario/editar-tipo-usuario.component';
import { ListaTipoUsuarioComponent } from './Tablas/lista-tipo-usuario/lista-tipo-usuario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaEmpleadoComponent } from './Tablas/lista-empleado/lista-empleado.component';
import { EditarEmpleadoComponent } from './Tablas/editar-empleado/editar-empleado.component';
import { ListaGeneroComponent } from './Tablas/lista-genero/lista-genero.component';
import { EditarGeneroComponent } from './Tablas/editar-genero/editar-genero.component';
import { ListaDepartamentoComponent } from './Tablas/lista-departamento/lista-departamento.component';
import { EditarDepartamentoComponent } from './Tablas/editar-departamento/editar-departamento.component';
import { ListaCiudadComponent } from './Tablas/lista-ciudad/lista-ciudad.component';
import { EditarCiudadComponent } from './Tablas/editar-ciudad/editar-ciudad.component';
import { ListaLugarreservaComponent } from './Tablas/lista-lugarreserva/lista-lugarreserva.component';
import { EditarLugarreservaComponent } from './Tablas/editar-lugarreserva/editar-lugarreserva.component';
import { ListaServicioComponent } from './Tablas/lista-servicio/lista-servicio.component';
import { EditarServicioComponent } from './Tablas/editar-servicio/editar-servicio.component';
import { ListaClienteComponent } from './Tablas/lista-cliente/lista-cliente.component';
import { EditarClienteComponent } from './Tablas/editar-cliente/editar-cliente.component';
import { ListaEmpresaComponent } from './Tablas/lista-empresa/lista-empresa.component';
import { EditarEmpresaComponent } from './Tablas/editar-empresa/editar-empresa.component';
import { ListaReservacionComponent } from './Tablas/lista-reservacion/lista-reservacion.component';
import { EditarReservacionComponent } from './Tablas/editar-reservacion/editar-reservacion.component';
import { RegistroAdminComponent } from './registro-admin/registro-admin.component';
import { ReservasPendientesComponent } from './reservas-pendientes/reservas-pendientes.component';
import { EditarPerfilUsuarioComponent } from './editar-perfil-usuario/editar-perfil-usuario.component';
import { VerReservaComponent } from './ver-reserva/ver-reserva.component';
import { VerReservasEmpresaComponent } from './ver-reservas-empresa/ver-reservas-empresa.component';
import { EditarPerfilEmpresaComponent } from './editar-perfil-empresa/editar-perfil-empresa.component';
import { EditarReservacionesPendientesComponent } from './editar-reservaciones-pendientes/editar-reservaciones-pendientes.component';
import { AceptarReservaComponent } from './aceptar-reserva/aceptar-reserva.component';
import { EditarReservaCComponent } from './editar-reserva-c/editar-reserva-c.component';
import { VerReservaCompletoCComponent } from './ver-reserva-completo-c/ver-reserva-completo-c.component';
import { ContrasenaClienteComponent } from './contrasena-cliente/contrasena-cliente.component';
import { ContrasenaEmpresaComponent } from './contrasena-empresa/contrasena-empresa.component';
import { ContrasenaAdminComponent } from './contrasena-admin/contrasena-admin.component';
import { RechazarReservaComponent } from './rechazar-reserva/rechazar-reserva.component';


export const routes: Routes = [
  {path: 'olvido_contrasena_admin', component:ContrasenaAdminComponent},
  {path: 'olvido-contrasena_empresa', component:ContrasenaEmpresaComponent},
  { path: 'olvido-contrasena_cliente', component:ContrasenaClienteComponent },
  {path: 'ver_reserva/completo/:Id_Reservacion', component:VerReservaCompletoCComponent},
  {path: 'aceptar/:id', component:AceptarReservaComponent},
  {path: 'rechazar/:id', component: RechazarReservaComponent},
  { path: 'registro_cliente', component: RegistroUsuarioComponent },
  { path: 'inicio_sesion', component: LoginUsuarioComponent },
  { path: 'registro_empresa', component: RegistroEmpresaComponent },
  { path: 'inicio_sesion_empresa', component: LoginEmpresaComponent },
  { path: 'principal', component: PaginaPrincipalComponent },
  { path: 'seg_pag', component: SegundaPagComponent },
  { path: 'principal_empresa', component: PrincipalEmpresaComponent },
  { path: 'perfil_empresa', component: PerfilEmpresaComponent },
  { path: 'perfil_cliente', component: PerfilUsuarioComponent },
  { path: 'vista_empresa/:Nit_Empresa', component: VistaEmpresaComponent },
  { path: 'reserva/:Nit_Empresa', component: ReservaComponent },
  { path: 'pendientes', component: ReservasPendientesComponent },
  { path:'tipo_usuario', component: ListaTipoUsuarioComponent},
  { path:'tipo_usuario/actualizar/:id', component: EditarTipoUsuarioComponent},
  { path:'tipo_usuario/agregar', component:EditarTipoUsuarioComponent},
  { path:'empleado', component: ListaEmpleadoComponent},
  { path:'empleado/actualizar/:id', component:EditarEmpleadoComponent},
  { path:'empleado/agregar', component:EditarEmpleadoComponent},
  { path:'genero', component:ListaGeneroComponent},
  { path:'genero/actualizar/:id', component:EditarGeneroComponent},
  { path:'genero/agregar', component:EditarGeneroComponent},
  { path:'departamento', component: ListaDepartamentoComponent},
  { path:'departamento/actualizar/:id', component:EditarDepartamentoComponent},
  { path:'departamento/agregar', component:EditarDepartamentoComponent},
  { path:'ciudad', component: ListaCiudadComponent},
  { path:'ciudad/actualizar/:id', component:EditarCiudadComponent},
  { path:'ciudad/agregar', component:EditarCiudadComponent},
  { path:'lugar_reserva', component: ListaLugarreservaComponent},
  { path:'lugar_reserva/actualizar/:id', component:EditarLugarreservaComponent},
  { path:'lugar_reserva/agregar', component:EditarLugarreservaComponent},
  { path:'servicio', component: ListaServicioComponent},
  { path:'servicio/actualizar/:id', component:EditarServicioComponent},
  { path:'servicio/agregar', component:EditarServicioComponent},
  { path:'cliente', component: ListaClienteComponent},
  { path:'cliente/actualizar/:id', component:EditarClienteComponent},
  { path:'cliente/agregar', component:EditarClienteComponent},
  { path:'empresa', component: ListaEmpresaComponent},
  { path:'empresa/actualizar/:id', component:EditarEmpresaComponent},
  { path:'empresa/agregar', component:EditarEmpresaComponent},
  { path:'reservacion', component: ListaReservacionComponent},
  { path:'reservacion/actualizar/:id', component:EditarReservacionComponent},
  { path:'reservacion/agregar', component:EditarReservacionComponent},
  { path:'navbar', component:NavbarComponent},
  { path:'inicio', component:InicioComponent},

  { path:'Bienvenido', component:InicioPrincipalComponent},
  { path:'editar_P_usuario/actualizar/:id', component:EditarPerfilUsuarioComponent},
  { path:'ver_Reserva/:Id_Reservacion', component:VerReservaComponent},
  { path: 'reserva_detalle/:Id_Reservacion', component:VerReservasEmpresaComponent },
  { path: 'editar_P_empresa/actualizar/:id', component:EditarPerfilEmpresaComponent },
  {
    path: 'editar_Reserva/actualizar/:Id_Reservacion',
    component: EditarReservacionesPendientesComponent
  },
  {path: 'editar_reserva/cambio/:Id_Reservacion', component:EditarReservaCComponent},

  { path:'login-admin', component:RegistroAdminComponent},
  { path: '**', redirectTo: '/inicio_sesion', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
