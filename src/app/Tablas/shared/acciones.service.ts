
import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CiudadModel, DepartamentoModel, EmpleadoModel, EmpresaperfilModel, GeneroModel, Tipo_usuarioModel, TodoModel, lugaryCiudadModel } from './acciones.model';
import { LugarReservacionModel, ServicioModel, ClienteModel, EmpresaModel, ReservacionModel, UsuarioperfilModel, reservaModel} from './acciones.model';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccionesService {

  public BASE_URL = "https://despliegue-backend-7h6l.onrender.com"

  constructor(private http: HttpClient) { }

  agregarUsuario(usuario: ClienteModel) {
    return this.http.post<string>(`${this.BASE_URL}/cliente/registro`, usuario);
  }
  agregarEmpresa(empresa: EmpresaModel) {
    return this.http.post<string>(`${this.BASE_URL}/empresa/registro`, empresa);
  }
  loginUsuario(usuario: ClienteModel) {
    return this.http.post<string>(`${this.BASE_URL}/cliente/login`, usuario);
  }
  loginEmpresa(empresa: EmpresaModel) {
    return this.http.post<string>(`${this.BASE_URL}/empresa/login`, empresa);
  }

  loginEmpleado(empleado: EmpleadoModel){
    return this.http.post<string>(`${this.BASE_URL}/admin/login`, empleado);
  }

  regitroinfo(info:ReservacionModel): Observable<string>{
    return this.http.post<string>(`${this.BASE_URL}/formulario`,info);
  }




  modificarcliente(usuario:ClienteModel){
    return this.http.put<string>(`${this.BASE_URL}/cliente/actualizar`,usuario)
  }



  //

  //agregar servicio empresa
  agregarServicio(servicio: ServicioModel) {
    return this.http.post<string>(`${this.BASE_URL}/agregar_Servicio`, servicio);
  }





  //para vista reservacion
  //agendar reservacion
  agendar(reserva: ReservacionModel) {
    return this.http.post<string>(`${this.BASE_URL}/reserva`, reserva);
  }

  //para ver lugar reservacion, servicios y empleados

  VerServicio(Correoelectronico_cliente: string){
    return this.http.get<ServicioModel[]>(`${this.BASE_URL}/verservicio/reserva/${Correoelectronico_cliente}`)
  }

  VerEmpleados(Correoelectronico_cliente: string){
    return this.http.get<EmpleadoModel[]>(`${this.BASE_URL}/verempleados/reserva/${Correoelectronico_cliente}`)
  }



  VerCiudadylugar(Correoelectronico_cliente: string){
    return this.http.get<lugaryCiudadModel[]>(`${this.BASE_URL}/verlugar/reserva/${Correoelectronico_cliente}`)
  }







 //para vista principal usuario
 VerEmpresas(Correoelectronico_cliente: string){
  return this.http.get<EmpresaModel[]>(`${this.BASE_URL}/empresas/${Correoelectronico_cliente}`)
}






  //para vista_empresa
  VerEmpresasEspecifico(Nit_Empresa: string){
    return this.http.get<EmpresaModel[]>(`${this.BASE_URL}/empresas4/${Nit_Empresa}`)
  }

  //para vista reservas-pendientes
  obtenerCorreoUsuario(){
    return sessionStorage.getItem('Correoelectronico_cliente')
  }

  VerReservasPendientes(Correoelectronico_cliente: string){
    return this.http.get<TodoModel[]>(`${this.BASE_URL}/busqueda4/${Correoelectronico_cliente}`)
  }


  informacionUsuario(Correoelectronico_cliente: string){
    return this.http.get<ClienteModel[]>(`${this.BASE_URL}/busquedasss/${Correoelectronico_cliente}`)
  }







  //para vista principal empresa
  obtenerCorreo(){
    return sessionStorage.getItem('Correoelectronico_empresa')
  }


  informacionEmpresa(Correoelectronico_empresa: string){
    return this.http.get<EmpresaModel[]>(`${this.BASE_URL}/busquedas/${Correoelectronico_empresa}`)
  }


  informacionReservasPendientes(Correoelectronico_empresa: string){
    return this.http.get<TodoModel[]>(`${this.BASE_URL}/busqueda/${Correoelectronico_empresa}`)
  }



  //tipo_usuario
  obtenerTipoUsuario(){
    return this.http.get<Tipo_usuarioModel[]>(this.BASE_URL+'/tipo_usuario');
  }

  obtenerTipoUsuarioid(id: string){
    return this.http.get<Tipo_usuarioModel[]>(`${this.BASE_URL}/tipo_usuario/${id}`)
  }

  agregarTipoUsuario(tipo_usuario: Tipo_usuarioModel){
    return this.http.post<string>(`${this.BASE_URL}/tipo_usuario/agregar`, tipo_usuario)
  }

  actualizarTipoUsuario(tipo_usuario: Tipo_usuarioModel) {
    return this.http.put<string>(`${this.BASE_URL}/tipo_usuario/actualizar/${tipo_usuario.idTipo_usuario}`, tipo_usuario);
  }

  borrarTipoUsuario(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/tipo_usuario/borrar/${id}`)
  }

  //empleado
  obtenerempleado(){
    return this.http.get<EmpleadoModel[]>(this.BASE_URL+'/empleado');
  }

  obtenerempleadoid(id: string){
    return this.http.get<EmpleadoModel[]>(`${this.BASE_URL}/empleado/${id}`)
  }

  agregarempleado(empleado: EmpleadoModel){
    return this.http.post<string>(`${this.BASE_URL}/empleado/agregar`, empleado)
  }
  actualizarempleado(empleado: EmpleadoModel) {
    return this.http.put<string>(`${this.BASE_URL}/empleado/actualizar/${empleado.id_empleado}`,empleado)
  }

  borrarempleado(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/empleado/borrar/${id}`)
  }


//genero

  obtenergenero(){
    return this.http.get<GeneroModel[]>(this.BASE_URL+'/genero');
  }

  obtenergeneroid(id: string){
    return this.http.get<GeneroModel[]>(`${this.BASE_URL}/genero/${id}`)
  }

  agregargenero(genero: GeneroModel){
    return this.http.post<string>(`${this.BASE_URL}/genero/agregar`, genero)
  }
  actualizargenero(genero: GeneroModel) {
    return this.http.put<string>(`${this.BASE_URL}/genero/actualizar/${genero.idGenero}`,genero)
  }

  borrargenero(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/genero/borrar/${id}`)
  }

  //departamento

  obtenerdepartamento(){
    return this.http.get<DepartamentoModel[]>(this.BASE_URL+'/departamento');
  }

  obtenerdepartamentoid(id: string){
    return this.http.get<DepartamentoModel[]>(`${this.BASE_URL}/departamento/${id}`)
  }

  agregardepartamento(departamento: DepartamentoModel){
    return this.http.post<string>(`${this.BASE_URL}/departamento/agregar`, departamento)
  }
  actualizardepartamento(departamento: DepartamentoModel) {
    return this.http.put<string>(`${this.BASE_URL}/departamento/actualizar/${departamento.idDepartamento}`,departamento)
  }

  borrardepartamento(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/departamento/borrar/${id}`)
  }


  //Ciudad

  obtenerciudad(){
    return this.http.get<CiudadModel[]>(this.BASE_URL+'/Ciudad');
  }

  obtenerciudadid(id: string){
    return this.http.get<CiudadModel[]>(`${this.BASE_URL}/ciudad/${id}`)
  }

  agregarciudad(ciudad: CiudadModel){
    return this.http.post<string>(`${this.BASE_URL}/ciudad/agregar`, ciudad)
  }
  actualizarciudad(ciudad: CiudadModel) {
    return this.http.put<string>(`${this.BASE_URL}/ciudad/actualizar/${ciudad.id_Ciudad}`,ciudad)
  }

  borrarciudad(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/ciudad/borrar/${id}`)
  }

  //lugar reserva
  obtenerlugarreserva(){
    return this.http.get<LugarReservacionModel[]>(this.BASE_URL+'/lugar_reserva');
  }

  obtenerlugarreservaid(id: string){
    return this.http.get<LugarReservacionModel[]>(`${this.BASE_URL}/lugar_reserva/${id}`)
  }

  agregarlugarreserva(lugar_reserva: LugarReservacionModel){
    return this.http.post<string>(`${this.BASE_URL}/lugar_reserva/agregar`, lugar_reserva)
  }
  actualizarlugarreserva(lugar_reserva: LugarReservacionModel) {
    return this.http.put<string>(`${this.BASE_URL}/lugar_reserva/actualizar/${lugar_reserva.ID_lugreserv}`,lugar_reserva)
  }

  borrarlugarreserva(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/lugar_reserva/borrar/${id}`)
  }

  //servicio
  obtenerservicio(){
    return this.http.get<ServicioModel[]>(this.BASE_URL+'/servicio');
  }

  obtenerservicioid(id: string){
    return this.http.get<ServicioModel[]>(`${this.BASE_URL}/servicio/${id}`)
  }

  agregarservicio(servicio: ServicioModel){
    return this.http.post<string>(`${this.BASE_URL}/servicio/agregar`, servicio)
  }
  actualizarservicio(servicio: ServicioModel) {
    return this.http.put<string>(`${this.BASE_URL}/servicio/actualizar/${servicio.idServicio}`,servicio)
  }

  borrarservicio(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/servicio/borrar/${id}`)
  }

  //cliente
  obtenercliente(){
    return this.http.get<ClienteModel[]>(this.BASE_URL+'/cliente');
  }

  obtenerclienteid(id: string){
    return this.http.get<ClienteModel[]>(`${this.BASE_URL}/cliente/${id}`)
  }

  agregarcliente(cliente: ClienteModel){
    return this.http.post<string>(`${this.BASE_URL}/cliente/agregar`, cliente)
  }
  actualizarcliente(cliente: ClienteModel) {
    return this.http.put<string>(`${this.BASE_URL}/cliente/actualizar/${cliente.id_Cliente}`,cliente)
  }

  borrarcliente(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/cliente/borrar/${id}`)
  }

  //empresa
  obtenerempresa(){
    return this.http.get<EmpresaModel[]>(this.BASE_URL+'/empresa');
  }

  obtenerempresaid(id: string){
    return this.http.get<EmpresaModel[]>(`${this.BASE_URL}/empresa/${id}`)
  }

  agregarempresa(empresa: EmpresaModel){
    return this.http.post<string>(`${this.BASE_URL}/empresa/agregar`, empresa)
  }
  actualizarempresa(empresa: EmpresaModel) {
    return this.http.put<string>(`${this.BASE_URL}/empresa/actualizar/${empresa.Nit_Empresa}`,empresa)
  }
  borrarempresa(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/empresa/borrar/${id}`)
  }

  //reservacion
  obtenerreservacion(){
    return this.http.get<ReservacionModel[]>(this.BASE_URL+'/reservacion');
  }

  obtenerreservacionid(id: string){
    return this.http.get<ReservacionModel[]>(`${this.BASE_URL}/reservacion/${id}`)
  }

  agregarreservacion(reservacion: ReservacionModel){
    return this.http.post<string>(`${this.BASE_URL}/reservacion/agregar`, reservacion)
  }
  actualizarreservacion(reservacion: ReservacionModel) {
    return this.http.put<string>(`${this.BASE_URL}/reservacion/actualizar/${reservacion.Id_Reservacion}`,reservacion)
  }
  borrarreservacion(id:string){
    return this.http.delete<string>(`${this.BASE_URL}/reservacion/borrar/${id}`)
  }
  PerfilCliente(correoElectronico: string): Observable<UsuarioperfilModel[]> {
    const url = `${this.BASE_URL}/perfil_usuario/${correoElectronico}`;
    return this.http.get<UsuarioperfilModel[]>(url);
  }
  PerfilEmpresa(correoElectronico: string): Observable<EmpresaperfilModel[]> {
    const url = `${this.BASE_URL}/perfil_empresa/${correoElectronico}`;
    return this.http.get<EmpresaperfilModel[]>(url);
  }
  VerReservaEspecifico(Id_Reservacion: string){
    return this.http.get<reservaModel[]>(`${this.BASE_URL}/reservacion4/${Id_Reservacion}`)
  }
  obtenerclienteidu(id: string){
    return this.http.get<ClienteModel[]>(`${this.BASE_URL}/cliente/${id}`)
  }
  AgregarImagen(formData:any){
    return this.http.post<any>(`${this.BASE_URL}/subir_img`,formData)
  }
  actualizarclienteu(cliente: ClienteModel) {
    return this.http.put<string>(`${this.BASE_URL}/cliente/update/${cliente.id_Cliente}`,cliente)
  }
  obtenerempresaeidu(id: string){
    return this.http.get<EmpresaModel[]>(`${this.BASE_URL}/empresau/${id}`)
  }
  actualizarempresau(empresa: EmpresaModel) {
    return this.http.put<string>(`${this.BASE_URL}/empresa/update/${empresa.Nit_Empresa}`,empresa)
  }
  obtenerreservacionidu(id: string){
    return this.http.get<ReservacionModel[]>(`${this.BASE_URL}/reservacionu/${id}`)
  }
  actualizarreservacionu(reservacion: ReservacionModel) {
    return this.http.put<string>(`${this.BASE_URL}/reservacion/update/${reservacion.Id_Reservacion}`,reservacion)
  }
  AceptarReserva(reservacion:ReservacionModel){
    return this.http.put<string>(`${this.BASE_URL}/reservacion/aceptar/${reservacion.Id_Reservacion}`,reservacion)
  }
  RechazarReserva(reservacion:ReservacionModel){
    return this.http.put<string>(`${this.BASE_URL}/reservacion/rechazar/${reservacion.Id_Reservacion}`,reservacion)
  }
  olvidoCliente (cliente: ClienteModel){
    return this.http.post<string>(`${this.BASE_URL}/olvido_contrasena/Cliente`,cliente);
  }
  restaurarCliente (cliente: ClienteModel){
    return this.http.put<string>(`${this.BASE_URL}/restaurar_contrasena/cliente/${cliente.Correoelectronico_cliente}`,cliente);
  }
  olvidoEmpresa (empresa: EmpresaModel){
    return this.http.post<string>(`${this.BASE_URL}/olvido_contrasena/Empresa`,empresa);
  }
  restaurarEmpresa (empresa: EmpresaModel){
    return this.http.put<string>(`${this.BASE_URL}/restaurar_contrasena/empresa/${empresa.Correoelectronico_empresa}`,empresa);
  }
  olvidoAdmin (empleado: EmpleadoModel){
    return this.http.post<string>(`${this.BASE_URL}/olvido_contrasena/Admin`,empleado);
  }
  restaurarAdmin (empleado: EmpleadoModel){
    return this.http.put<string>(`${this.BASE_URL}/restaurar_contrasena/admin/${empleado.Nom_empleado}`,empleado);
  }
  tiempo(Empresa_Nit_Empresa: string, Fecha_reservacion: string, Hora_reservacion: string) {
    return this.http.get<ReservacionModel>(`${this.BASE_URL}/tiempo/${Empresa_Nit_Empresa}/${Fecha_reservacion}/${Hora_reservacion}`);
  }
}