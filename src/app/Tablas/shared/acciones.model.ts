export class Tipo_usuarioModel {

    constructor (
        public idTipo_usuario: string,
        public Nombre_t_usuario: string,
        public estado: string
    ){ }

}

export class EmpleadoModel{

    constructor(
        public id_empleado :string,
        public Nom_empleado : string,
        public Correo_elec_admin:string,
        public Password_empleado: string,
        public Tipo_usuario_idTipo_usuario: string,
        public Telefono_empleado : string,
        public Genero_idGenero : string
    ){}
}

export class GeneroModel{

    constructor(
        public idGenero: string,
        public Desc_genero: string
    ) {}
}

export class DepartamentoModel{

    constructor(
        public idDepartamento:string,
        public nombre_departamento:string
    ){}

}

export class lugaryCiudadModel{

  constructor(
      public ID_lugreserv:string,
      public Direccion_lugarreserv:string,
      public Nom_lugreserv:string,
      public Ciudad_id_Ciudad: string,
      public id_Ciudad:string,
      public nombre_ciudad:string,
      public Departamento_idDepartamento: string
  ){ }

}

export class CiudadModel{

    constructor(
        public id_Ciudad:string,
        public nombre_ciudad:string,
        public Departamento_idDepartamento: string
    ){ }

}

export class LugarReservacionModel{

    constructor(
        public ID_lugreserv:string,
        public Direccion_lugarreserv:string,
        public Nom_lugreserv:string,
        public Ciudad_id_Ciudad: string
    ){}

}

export class ServicioModel{

    constructor(
        public idServicio:string,
        public Nombre_servicio:string
    ){}

}

export class ClienteModel {
    constructor(
        public id_Cliente: string,
        public Nombre_cliente: string,
        public Correoelectronico_cliente: string,
        public Password_cliente: string,
        public Telefono_cliente: string,
        public Genero_idGenero: string,
        public Ciudad_id_Ciudad: string,
        public Foto_cliente: string
    ) {}
}

export class EmpresaModel {

    constructor(
        public Nit_Empresa:string,
        public Nombre_empresa:string,
        public Correoelectronico_empresa:string,
        public Password_empresa:string,
        public Desc_empresa:string,
        public Telefono_empresa:string,
        public Ciudad_id_Ciudad:string, 
        public Foto_empresa:string
    ){}

}

export class ReservacionModel {
    constructor(
      public Id_Reservacion: string,
      public Servicio_idServicio: string,
      public Fecha_reservacion: string,
      public Hora_reservacion: string,
      public Lugar_reservacion_idLugar_reservacion: string,
      public Cant_person: string,
      public Condiciones: string,
      public Empresa_Nit_Empresa: string,
      public Cliente_id_Cliente: string,
      public Valor: string,
      public Estatus: string,
      public Motivo: string,
      public Empleados_id_empleado: string
    ) {}
  }



  export class TodoModel{

    constructor(
        public Id_Reservacion: string,
        public Servicio_idServicio: string,
        public Fecha_reservacion: string,
        public Hora_reservacion: string,
        public Lugar_reservacion_idLugar_reservacion: string,
        public Empresa_Nit_Empresa: string,
        public Cliente_id_Cliente: string,
        public Valor: string,
        public Empleados_id_empleado: string,
        public idServicio:string,
        public Nombre_servicio:string,
        public ID_lugreserv:string,
        public Direccion_lugarreserv:string,
        public Nom_lugreserv:string,
        public Ciudad_id_Ciudad: string,
        public Nit_Empresa:string,
        public Nombre_empresa:string,
        public Correoelectronico_empresa:string,
        public Desc_empresa:string,
        public Telefono_empresa:string,
        public Foto_empresa:string,
        public id_Cliente: string,
        public Nombre_cliente: string,
        public Correoelectronico_cliente: string,
        public Telefono_cliente: string,
        public Genero_idGenero: string,
        public Foto_cliente: string,
        public id_empleado :string,
        public Nom_empleado : string,
        public nombre_ciudad:string,
        public Correo_elec_admin:string,
        public Desc_genero: string,
        public Estatus:string,
        public Cant_person: string,
        public Condiciones: string
    ){}

}

export class UsuarioperfilModel {
    constructor(
        public id_Cliente: string,
        public Nombre_cliente: string,
        public Correoelectronico_cliente: string,
        public Password_cliente: string,
        public Telefono_cliente: string,
        public Genero_idGenero: number,
        public Ciudad_id_Ciudad: number,
        public Foto_cliente: string,
        public nombre_ciudad: string,
        public Desc_genero: string
    ) {}
}
export class EmpresaperfilModel {
    constructor(
        public Nit_Empresa: string,
        public Nombre_empresa: string,
        public Correoelectronico_empresa: string,
        public Password_empresa: string,
        public Desc_empresa: string,
        public Telefono_empresa: string,
        public Ciudad_id_Ciudad: string,
        public Foto_empresa: string,
        public nombre_ciudad: string,
    ) {}
}

export class reservaModel {

    constructor(
        public Id_Reservacion: string,
        public Servicio_idServicio: string,
        public Fecha_reservacion: string,
        public Hora_reservacion: string,
        public Lugar_reservacion_idLugar_reservacion: string,
        public Empresa_Nit_Empresa: string,
        public Cliente_id_Cliente: string,
        public Valor: string,
        public Empleados_id_empleado: string,
        public Nombre_servicio:string,
        public Direccion_lugarreserv:string,
        public Nom_lugreserv:string,
        public Nombre_empresa:string,
        public Correoelectronico_empresa:string,
        public Telefono_empresa:string,
        public Foto_empresa:string,
        public Nombre_cliente: string,
        public Correoelectronico_cliente: string,
        public Telefono_cliente: string,
        public Foto_cliente: string,
        public Estatus:string,
        public Cant_person: string,
        public Condiciones: string,
        public Motivo: string
    ){}

}

  
