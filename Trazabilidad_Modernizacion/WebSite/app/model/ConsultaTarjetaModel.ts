import { Marca } from "./Marca";
import { Producto } from "./Producto";
import { Estado } from "./Estado";
import { GrupoAfinidad } from "./Gaf";

export class ConsultaTarjetaModel {
    public datosTarjeta: DatosTarjeta = new DatosTarjeta();
    public datosPieza: DatosPieza = new DatosPieza();
    public datosCliente: DatosCliente = new DatosCliente();
    public canal_origen: string;
    paginacion: Paginacion = new Paginacion();

}
export class DatosTarjeta {
    sucursal_nro: string;
    sucursal_nombre: string="";
    marca: Marca;
    producto: Producto;
    gaf: GrupoAfinidad;
    nro_cuenta: string="";
    nro_tarjeta: string="";
}
export class DatosPieza {
    estado: Estado;
    fecha_estado_desde: string="";
    fecha_estado_hasta: string = "";
    nro_acuse: string;
    centro_embozado:string;
    motivo_impresion: string;
    modalidad_entrega: string;
}
export class DatosCliente {

    nro_documento: string;
    tipo_documento: string;
}
export class Paginacion {
    cantidad_botones: number = 0;
    botones: Array<number> = new Array<number>();
    pagina_actual: number = 0;
    cantidad_solicitudes: number = 0;

    cantidad_maxima_solicitudes_por_pagina: number = 10;
    cantidad_maxima_botones: number = 0;
    registrosPorPagina: number = 20;
}
